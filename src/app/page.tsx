import { Logo } from "@/components/Logo";
import { Meta } from "@/components/Meta";
import { navs } from "@/constants/navs";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <div className="h-10 w-10 mb-6 text-black dark:text-white">
            <Logo />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-[Lora] tracking-tight">
              Michael Genesini
            </h1>
            <div className="mt-2 w-full border-t border-dashed border-[#e5ddd0] dark:border-neutral-700"></div>
            <p className="mt-2 text-lg sm:text-xl text-[#6b5e4f] dark:text-white font-[GeistMono] tracking-[.25em]">
              Engineering Manager & Tinkerer
            </p>
            <div className="mt-2 w-full border-t border-dashed border-[#e5ddd0] dark:border-neutral-700"></div>
          </div>

          <nav className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-[GeistMono]">
              {navs.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#6b5e4f] dark:text-neutral-300 border-b border-transparent hover:border-[#0c7b5f] hover:text-[#0c7b5f] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
