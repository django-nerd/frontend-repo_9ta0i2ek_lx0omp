import { Rocket, Github, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold text-white">Parthionex</p>
              <p className="text-[11px] text-white/60">by Parth Chittalwar</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#upload" className="hover:text-white">Upload</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#upload"
              className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
            >
              Upload
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 sm:block"
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </div>
            </a>
            <a
              href="mailto:hello@parthionex.dev"
              className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:bg-white/5"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
