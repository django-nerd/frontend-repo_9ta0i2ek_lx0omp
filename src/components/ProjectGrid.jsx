import { Star, Lock, Code, Gamepad2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nebula Runner",
    type: "game",
    badge: "Paid",
    price: "$4.99",
    desc: "Fast-paced endless runner with cosmic power-ups.",
  },
  {
    id: 2,
    title: "OpenUI Kit",
    type: "opensource",
    badge: "Open Source",
    desc: "React component library with Tailwind presets.",
  },
  {
    id: 3,
    title: "FocusTrackr",
    type: "app",
    badge: "Free",
    desc: "Productivity timer with analytics and streaks.",
  },
  {
    id: 4,
    title: "Pixel Forge",
    type: "game",
    badge: "Paid",
    price: "$1.99",
    desc: "Mini retro game bundle with ads removed.",
  },
];

function TypeIcon({ type }) {
  if (type === "game") return <Gamepad2 className="h-4 w-4 text-fuchsia-400" />;
  if (type === "opensource") return <Code className="h-4 w-4 text-emerald-400" />;
  return <Star className="h-4 w-4 text-indigo-400" />;
}

export default function ProjectGrid() {
  return (
    <section id="projects" className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-white/60">Mix of free, paid, and open-source releases.</p>
          </div>
          <a href="#upload" className="text-sm text-white/70 hover:text-white">Submit yours</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-2.5 py-1 text-xs text-white/80">
                  <TypeIcon type={p.type} />
                  <span className="capitalize">{p.type}</span>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-indigo-500/20 px-2.5 py-1 text-xs text-fuchsia-200">
                  {p.badge === "Paid" && <Lock className="h-3.5 w-3.5" />}
                  <span>{p.price ? `${p.badge} • ${p.price}` : p.badge}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-neutral-900">View</a>
                <a href="#" className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80">Details</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
