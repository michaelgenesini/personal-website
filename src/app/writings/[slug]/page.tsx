import { notFound } from "next/navigation"
import Nav from "@/components/Nav"
import { Metadata } from "next"
import { getPost } from "@/utils/getPost"
import { Mdx } from "@/components/Mdx"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost({ slug })

  if (!post) return {}

  const { data } = post

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
  }
}

export default async function WritingPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const post = getPost({ slug })

  if (!post) return notFound()

  const { data, content } = post

  const formattedDate = new Date(data.date)
    .toISOString()
    .split("T")[0]
    .replace(/-/g, ".")

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 md:px-0">
        <article className="prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl font-serif tracking-tight mb-6">
            {data.title}
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed font-[Lora] leading-7">
            {data.date && (
              <p className="text-sm text-neutral-500 mb-4">
                :: {formattedDate}
                {data.tags && data.tags.length > 0 && (
                  <> — {data.tags.join(", ")}</>
                )}
              </p>
            )}
            <Mdx content={content} />
          </div>
        </article>
        <div className="my-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
      </section>
    </main>
  )
}
