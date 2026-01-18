import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function WritingsPage() {
  const postsDir = path.join(process.cwd(), "content/writings");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const slug = filename.replace(/\.mdx?$/, "");
      return { ...data, slug } as {
        title: string;
        slug: string;
        date: string;
        description: string;
        tags: string[];
        hidden?: boolean;
      };
    })
    .filter((a) => !a.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      <Nav />

      <section className="max-w-3xl mx-auto px-4 md:px-0">
        <h1 className="text-3xl font-serif tracking-tight mb-2 font-[Lora]">
          Writings
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Learnings, thoughts, and reflections I write to stay present and find clarity.
        </p>
        <ul className="space-y-6">
          {posts.map((post) => {
            const formattedDate = new Date(post.date)
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".");

            return (
              <li
                key={post.slug}
                className="pb-6 border-b border-dashed border-neutral-300 dark:border-neutral-700"
              >
                <Link href={`/writings/${post.slug}`}>
                  <h2 className="text-lg font-[Lora] underline">
                    {post.title}
                  </h2>
                </Link>
                {post.description && (
                  <p className="font-serif text-neutral-700 dark:text-neutral-300 mt-2">
                    {post.description}
                  </p>
                )}
                <p className="text-sm text-neutral-500 mt-2">
                  :: {formattedDate}
                  {post.tags && post.tags.length > 0 && (
                    <> — {post.tags.join(", ")}</>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
