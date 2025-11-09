export default function Plans() {
  return (
    <section id="plans" className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Monetize smartly</h2>
          <p className="mt-2 text-white/60">Offer free, paid, or open-source downloads with optional ads.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">Free</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">$0</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Public listing</li>
              <li>• Unlimited free downloads</li>
              <li>• Open-source friendly</li>
            </ul>
            <a href="#upload" className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900">Get started</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-6">
            <p className="text-sm text-white/70">Paid</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Custom price</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Secure checkout link</li>
              <li>• License key delivery</li>
              <li>• Promo codes</li>
            </ul>
            <a href="#upload" className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900">Sell a project</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">Ad-supported</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Free with ads</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Monetize through ads</li>
              <li>• Banner or rewarded</li>
              <li>• Great for games</li>
            </ul>
            <a href="#upload" className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900">Enable ads</a>
          </div>
        </div>
      </div>
    </section>
  );
}
