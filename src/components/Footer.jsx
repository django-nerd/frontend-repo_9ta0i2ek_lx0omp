export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Parthionex · Built by Parth Chittalwar</p>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#plans" className="hover:text-white">Plans</a>
            <a href="#upload" className="hover:text-white">Upload</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
