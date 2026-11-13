import Link from "next/link";

export default function MinersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-orange-400 mb-4">
          Miner Directory
        </h1>

        <p className="text-zinc-400">
          Explore miners across the Bit Matrix network.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/u/rick">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-orange-500 cursor-pointer">
              <h2 className="text-2xl font-bold text-orange-400">
                Rick&apos;s NerdQaxe
              </h2>

              <p className="text-zinc-400 mt-2">
                Rank #1
              </p>

              <p className="mt-3">
                Best Share: 52.1G
              </p>

              <p>
                Uptime: 99.8%
              </p>
            </div>
          </Link>

          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-400">
              Jane&apos;s Gamma
            </h2>

            <p className="text-zinc-400 mt-2">
              Rank #2
            </p>

            <p className="mt-3">
              Best Share: 48.9G
            </p>

            <p>
              Uptime: 99.1%
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-orange-400">
              Hash King
            </h2>

            <p className="text-zinc-400 mt-2">
              Rank #3
            </p>

            <p className="mt-3">
              Best Share: 41.7G
            </p>

            <p>
              Uptime: 98.6%
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}