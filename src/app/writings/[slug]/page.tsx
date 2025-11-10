import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-[Lora] text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-[Lora] text-2xl sm:text-3xl mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-[Lora] text-xl sm:text-2xl mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="leading-relaxed font-[Lora] text-[15px] sm:text-base mb-4"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-5 space-y-2 mb-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 rounded bg-neutral-900/90 text-neutral-100 text-[13px] break-words"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mt-6 mb-8 rounded-lg bg-neutral-900/95 text-white p-4 overflow-x-auto text-sm sm:text-[15px]"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l border-dashed border-neutral-400 pl-4 italic text-neutral-600 dark:text-neutral-300 my-6"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-neutral-500 my-8 sm:my-10" {...props} />
  ),
};

export default async function WritingPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/writings", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const formattedDate = new Date(data.date)
    .toISOString()
    .split("T")[0]
    .replace(/-/g, ".");

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 md:px-0">
        <article className="prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl font-serif tracking-tight mb-6 font-[Lora]">
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
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </article>
        <div className="my-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
      </section>
    </main>
  );
}
