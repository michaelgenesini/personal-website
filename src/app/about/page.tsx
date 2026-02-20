import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAbout } from "@/utils/getAbout";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import Head from "next/head";
import { Meta } from "@/components/Meta";

export default async function AboutPage() {
  const post = getAbout({ slug: "about" });

  if (!post) return notFound();

  const { data, content } = post;

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen text-neutral-900 dark:text-neutral-100">
        <Nav />

        <section className="max-w-3xl mx-auto px-4 md:px-0">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-3">
              <h1 className="text-3xl font-medium tracking-[-0.02em] leading-[1.15] mb-8 font-[Lora]">
                {data.title}
              </h1>
              <div className="max-w-none font-[Lora]">
                <Mdx content={content} />
              </div>
            </div>

            <div className="md:col-span-2">
              <Image
                src={data.cover}
                alt="Michael Genesini"
                width={900}
                height={1200}
                className="w-full h-auto rounded-md border border-black dark:border-neutral-700 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
