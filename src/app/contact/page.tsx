import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Meta } from "@/components/Meta";

export default function AboutPage() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen text-neutral-900 dark:text-neutral-100">
        <Nav />

        <section className="max-w-3xl mx-auto px-4 md:px-0">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-medium tracking-[-0.02em] leading-[1.15] mb-8 font-[Lora]">
                Contact
              </h1>
              <p className="font-[Lora] text-[#6b5e4f] dark:text-neutral-400 text-[15px] leading-[1.65]">
                I&apos;m not hiding — just keeping things simple. You can reach
                me on{" "}
                <a
                  href="https://www.linkedin.com/in/michaelgenesini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0c7b5f] no-underline border-b border-transparent hover:border-[#0c7b5f] transition-colors"
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
                className="w-third h-auto rounded-md border border-black dark:border-neutral-700 object-cover"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
