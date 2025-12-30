import { Logo } from "@/components/Logo"
import { Meta } from "@/components/Meta"
import { navs } from "@/constants/navs"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <div className="h-10 w-10 mb-6 text-black dark:text-white">
            <Logo />
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-[Lora] tracking-tight">
              Michael Genesini
            </h1>
            <div className="mt-2 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
            <p className="mt-2 text-lg sm:text-xl text-black dark:text-white font-[GeistMono] tracking-[.25em]">
              Engineering Manager & Tinkerer
            </p>
            <div className="mt-2 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
          </div>

          <nav className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-[GeistMono]">
              {navs.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="relative font-medium text-black hover:text-black dark:text-white dark:hover:text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:h-[2px] after:w-2 after:rounded after:bg-black after:opacity-0 hover:after:opacity-100 dark:after:bg-white transition"
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
  )
}
