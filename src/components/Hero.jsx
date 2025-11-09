import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-200px,rgba(88,82,232,0.35),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-4 w-4 text-fuchsia-400" />
            Launch your projects to the world
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Parthionex — Showcase, sell, and share your apps
          </h1>
          <p className="mt-5 text-pretty text-lg leading-7 text-white/70">
            A modern home for your creations by Parth Chittalwar. Upload games and apps, mark them as free, paid, or open-source, and reach your audience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#upload" className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-white/90">
              Upload a Project
            </a>
            <a href="#projects" className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
