export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-4 md:px-0 my-12">
      <div className="w-full border-t border-dashed border-[#e5ddd0] dark:border-neutral-800"></div>
      <div className="flex justify-between items-center mt-5 text-xs text-[#6b5e4f] dark:text-neutral-500 font-[Lora]">
        <p>&copy; {new Date().getFullYear()} Michael Genesini</p>
        <p className="italic">Built with intention.</p>
      </div>
    </footer>
  );
}
