import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getPost } from "@/utils/getPost";
import { Mdx } from "@/components/Mdx";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost({ slug });

  if (!post) return {};

  const { data } = post;

  return {
    title: data.title,
    description: data.description,
    authors: [{ name: "Michael Genesini" }],
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      publishedTime: data.date,
      authors: ["Michael Genesini"],
      images: [data.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.cover],
    },
  };
}

export default async function WritingPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPost({ slug });

  if (!post) return notFound();

  const { data, content } = post;

  const formattedDate = new Date(data.date)
    .toISOString()
    .split("T")[0]
    .replace(/-/g, ".");

  return (
    <main className="min-h-screen text-neutral-900 dark:text-neutral-100">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 md:px-0">
        <Link
          href="/writings"
          className="text-sm font-semibold text-[#0c7b5f] border-b border-transparent hover:border-[#0c7b5f] transition-colors"
        >
          &larr; Back to writings
        </Link>
        <article className="mt-10">
          <h1 className="text-3xl font-[Lora] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
            {data.title}
          </h1>
          <div className="max-w-none font-[Lora]">
            {data.date && (
              <p className="text-[#6b5e4f] dark:text-neutral-500 mb-6 text-sm">
                :: {formattedDate}
                {data.tags && data.tags.length > 0 && (
                  <> — {data.tags.join(", ")}</>
                )}
              </p>
            )}
            <Mdx content={content} />
          </div>
        </article>
        <Link
          href="/writings"
          className="inline-block mt-14 text-sm font-semibold text-[#0c7b5f] border-b border-transparent hover:border-[#0c7b5f] transition-colors"
        >
          &larr; Back to writings
        </Link>
      </section>
      <Footer />
    </main>
  );
}
