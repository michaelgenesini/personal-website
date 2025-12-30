import Image from "next/image"
import Nav from "@/components/Nav"
import { getAbout } from "@/utils/getAbout"
import { notFound } from "next/navigation"
import { Mdx } from "@/components/Mdx"
import Head from "next/head"
import { Meta } from "@/components/Meta"

export default async function AboutPage() {
  const post = getAbout({ slug: "about" })

  if (!post) return notFound()

  const { data, content } = post

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
        <Nav />

        <section className="max-w-3xl mx-auto px-4 md:px-0">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-3">
              <h1 className="text-3xl tracking-tight mb-6 font-[Lora]">
                {data.title}
              </h1>
              <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed font-[Lora] leading-7">
                <Mdx content={content} />
              </div>
            </div>

            <div className="md:col-span-2">
              <Image
                src={data.cover}
                alt="Michael Genesini"
                width={900}
                height={1200}
                className="w-full h-auto rounded-md border border-black dark:border-white object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <div className="my-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
      </main>
    </>
  )
}
