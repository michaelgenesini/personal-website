import { MDXRemote } from "next-mdx-remote/rsc"

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
}

export const Mdx = ({ content }: { content: string }) => (
  <MDXRemote source={content} components={mdxComponents} />
)
