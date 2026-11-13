export default function PoolPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-orange-400 mb-4">
          Bit Matrix Pool
        </h1>

        <p className="text-zinc-400">
          Home miners united. Chase the next block together.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Pool Hashrate</p>
            <p className="text-3xl font-bold text-orange-400">
              483 TH/s
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Active Miners</p>
            <p className="text-3xl font-bold text-orange-400">
              61
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Pool Luck</p>
            <p className="text-3xl font-bold text-green-400">
              103%
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Expected Block</p>
            <p className="text-3xl font-bold text-orange-400">
              42 Days
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Current Round
        </h2>

        <div className="bg-zinc-900 rounded-xl p-8">
          <p className="mb-4">
            Shares Submitted: 2,847,522
          </p>

          <p className="mb-4">
            Round Start: 5 Days Ago
          </p>

          <p>
            Round Progress: 37%
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Best Share This Round
        </h2>

        <div className="bg-zinc-900 border border-orange-500 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Rick&apos;s NerdQaxe
          </h3>

          <p className="mb-3">
            Share Difficulty: 52.1G
          </p>

          <p className="text-green-400">
            Current Round Leader
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="bg-zinc-900 rounded-xl p-6">
          <p className="mb-3">
            ✅ Rick&apos;s NerdQaxe submitted a 52.1G share
          </p>

          <p className="mb-3">
            ✅ Jane&apos;s Gamma entered the Top 10
          </p>

          <p>
            ✅ Hash King crossed 4 million submitted shares
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">
          Pool Records
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">
              Highest Share
            </p>

            <p className="text-3xl font-bold text-orange-400">
              102.5G
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">
              Longest Round
            </p>

            <p className="text-3xl font-bold text-orange-400">
              91 Days
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">
              Blocks Found
            </p>

            <p className="text-3xl font-bold text-orange-400">
              0
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}