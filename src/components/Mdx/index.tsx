import { MDXRemote } from "next-mdx-remote/rsc"

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>

const mdxComponents = {
  img: ({ src, alt, title, ...props }: ImgProps) => {
    let style: React.CSSProperties = {}

    if (title) {
      const trimmed = title.trim()
      if (trimmed.endsWith("%")) {
        style.width = trimmed
      } else if (trimmed.endsWith("px")) {
        style.width = trimmed
      } else if (/^\d+$/.test(trimmed)) {
        style.width = `${trimmed}px`
      }
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        style={style}
        className="my-6 rounded-md border border-black dark:border-white mx-auto block"
        {...props}
      />
    )
  },
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-[Lora] text-3xl sm:text-4xl md:text-5xl mb-8 tracking-[-0.02em] leading-[1.15] font-medium"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-[Lora] text-2xl sm:text-3xl mt-12 mb-5 tracking-[-0.02em] leading-[1.15] font-medium" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-[Lora] text-xl sm:text-2xl mt-10 mb-4 tracking-[-0.02em] leading-[1.15] font-medium" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="leading-[1.65] font-[Lora] text-[15px] text-[#6b5e4f] dark:text-neutral-300 mb-5"
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
    <li className="leading-[1.65] text-[15px] text-[#6b5e4f] dark:text-neutral-300" {...props} />
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
      className="border-l border-dashed border-[#e5ddd0] dark:border-neutral-700 pl-4 italic text-[#6b5e4f] dark:text-neutral-300 my-8"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-[#e5ddd0] dark:border-neutral-700 my-10 sm:my-12" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#0c7b5f] no-underline border-b border-transparent hover:border-[#0c7b5f] transition-colors" {...props} />
  ),
}

export const Mdx = ({ content }: { content: string }) => (
  <MDXRemote source={content} components={mdxComponents} />
)
