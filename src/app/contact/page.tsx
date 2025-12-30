import Nav from "@/components/Nav"
import Head from "next/head"
import { Meta } from "@/components/Meta"

export default function AboutPage() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
        <Nav />

        <section className="max-w-3xl mx-auto px-4 md:px-0">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-2">
              <h1 className="text-3xl tracking-tight mb-6 font-[Lora]">
                Contact
              </h1>
              <p className="font-[Lora] text-neutral-700 dark:text-neutral-300 text-lg">
                I&apos;m not hiding — just keeping things simple. You can reach
                me on{" "}
                <a
                  href="https://www.linkedin.com/in/michaelgenesini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>

            <div className="md:col-span-3 mt-4">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ3anRzcWExdDBrNnA4Y3BibG9qN3V1aWNqM3QyNHhndTF2YzFvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nCK0MutoTCJ9LnbEWj/giphy.gif"
                alt="Michael Scott reaction call"
                className="w-third h-auto rounded-md border border-black dark:border-white object-cover"
              />
            </div>
          </div>
        </section>

        <div className="my-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
      </main>
    </>
  )
}
