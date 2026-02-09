import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
        <h1 className="text-3xl font-[Lora] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
          Writings
        </h1>
        <p className="text-[#6b5e4f] dark:text-neutral-400 mb-8">
          Learnings, thoughts, and reflections I write to stay present and find clarity.
        </p>
        <ul className="space-y-8">
          {posts.map((post, index) => {
            const formattedDate = new Date(post.date)
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".");
            const isLast = index === posts.length - 1;

            return (
              <li
                key={post.slug}
                className={`pb-8 ${isLast ? "" : "border-b border-dashed border-[#e5ddd0] dark:border-neutral-700"}`}
              >
                <Link href={`/writings/${post.slug}`}>
                  <h2 className="text-lg font-[Lora] underline">
                    {post.title}
                  </h2>
                </Link>
                {post.description && (
                  <p className="font-serif text-[#6b5e4f] dark:text-neutral-300 mt-2 text-[15px] leading-[1.65]">
                    {post.description}
                  </p>
                )}
                <p className="text-sm text-[#6b5e4f] dark:text-neutral-400 mt-2">
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
      <Footer />
    </main>
  );
}
