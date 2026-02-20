import { navs } from "@/constants/navs";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex flex-col md:flex-row text-center max-w-3xl mx-auto py-6 md:py-10 px-4 md:px-0 space-y-4 md:space-y-0">
        <Link
          href="/"
          aria-label="Home"
          className="flex space-x-4 items-center justify-center flex-none"
        >
          <svg
            width="56"
            height="41"
            viewBox="0 0 56 41"
            className="h-10 w-10 opacity-90 text-blank dark:text-neutral-100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M55.5 31.2934C55.5 40.2934 42.2924 40.2934 26 40.2934C9.7076 40.2934 0 38.9706 0 34C0 25.5 17.7076 23 34 23C50.2924 23 55.5 26.3229 55.5 31.2934Z" />
            <path d="M44 15.5C44 18.8137 38.8888 20.321 29.5 20.321C20.1112 20.321 15 19.3137 15 16C15 12.6863 20.1112 10 29.5 10C38.8888 10 44 12.1863 44 15.5Z" />
            <path d="M36.1567 4C36.1567 6.20914 34.93 7 31.8925 7C28.8549 7 27.3925 7.20914 27.3925 5C27.3925 2.79086 27.6191 0 30.6567 0C33.6942 0 36.1567 1.79086 36.1567 4Z" />
          </svg>

          <span className="font-[Lora] text-2xl">Michael Genesini</span>
        </Link>

        <ul className="flex-1 flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm sm:text-base font-[GeistMono]">
          {navs.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="text-[#6b5e4f] dark:text-neutral-400 border-b border-transparent hover:border-[#0c7b5f] hover:text-[#0c7b5f] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-10 w-full border-t border-dashed border-[#e5ddd0] dark:border-neutral-800"></div>
    </>
  );
}
