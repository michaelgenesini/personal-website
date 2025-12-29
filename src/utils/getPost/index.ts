import matter from "gray-matter"
import fs from "fs"
import path from "path"
import { Post } from "@/types/post"

export const getPost = ({ slug }: { slug: string }) => {
  const filePath = path.join(process.cwd(), "content/writings", `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents) as unknown as Post

  return {
    data,
    content,
  }
}
