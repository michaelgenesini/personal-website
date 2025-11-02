

export default function Nav() {
  const links = [
    ["[About]", "/about"],
    ["[Contact]", "/contact"],
    ["[Writing]", "/writing"],
    ["[Reading]", "/reading"],
    ["[Working with me]", "/working-with-me"],
    ["[Stack]", "/stack"],
    ["[Now]", "/now"],
  ];


  return (
    <nav className="flex flex-col items-center justify-center p-8 text-center">
      <a href="/" aria-label="Home" className="mb-4">
        <svg
          width="56"
          height="41"
          viewBox="0 0 56 41"
          className="h-10 w-10 opacity-90 text-blank dark:text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M55.5 31.2934C55.5 40.2934 42.2924 40.2934 26 40.2934C9.7076 40.2934 0 38.9706 0 34C0 25.5 17.7076 23 34 23C50.2924 23 55.5 26.3229 55.5 31.2934Z" />
          <path d="M44 15.5C44 18.8137 38.8888 20.321 29.5 20.321C20.1112 20.321 15 19.3137 15 16C15 12.6863 20.1112 10 29.5 10C38.8888 10 44 12.1863 44 15.5Z" />
          <path d="M36.1567 4C36.1567 6.20914 34.93 7 31.8925 7C28.8549 7 27.3925 7.20914 27.3925 5C27.3925 2.79086 27.6191 0 30.6567 0C33.6942 0 36.1567 1.79086 36.1567 4Z" />
        </svg>
      </a>


      <ul className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-[GeistMono]">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="relative font-medium text-black hover:text-black dark:text-white dark:hover:text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:h-[2px] after:w-1 after:bg-black after:opacity-0 hover:after:opacity-100 dark:after:bg-white transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

        <div className="mt-10 w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"></div>
    </nav>
  );
}