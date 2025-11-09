import { useState } from "react";

const INITIAL = {
  title: "",
  type: "app",
  pricing: "free",
  repo: "",
  url: "",
  description: "",
};

export default function UploadForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="upload" className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Upload your project</h2>
        <p className="mt-2 text-center text-white/60">Add details, choose pricing, and publish.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                placeholder="e.g., Pixel Forge"
                required
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
              >
                <option value="app">App</option>
                <option value="game">Game</option>
                <option value="tool">Tool</option>
                <option value="opensource">Open Source</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-white/70">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
              placeholder="What makes it special?"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Pricing</label>
              <select
                name="pricing"
                value={form.pricing}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
              >
                <option value="free">Free</option>
                <option value="paid">Paid</option>
                <option value="ads">Ad-supported</option>
                <option value="opensource">Open Source</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70">Price (if paid)</label>
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                placeholder="e.g., 4.99"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Project URL</label>
              <input
                name="url"
                value={form.url}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                placeholder="Download or storefront link"
              />
            </div>
            <div>
              <label className="text-sm text-white/70">GitHub Repo</label>
              <input
                name="repo"
                value={form.repo}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                placeholder="https://github.com/user/repo"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-white/60">This demo stores locally. We can wire it to a backend next.</p>
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900">Publish</button>
          </div>

          {submitted && (
            <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
              Submitted! Your project “{form.title || "Untitled"}” is ready to review.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
