import matter from "gray-matter"
import fs from "fs"
import path from "path"
import { Post } from "@/types/post"

export const getAbout = ({ slug }: { slug: string }) => {
  const filePath = path.join(process.cwd(), "content/about", `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents) as unknown as Post

  return {
    data,
    content,
  }
}
