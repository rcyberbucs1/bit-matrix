export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="text-center py-20 px-6">
        <h1 className="text-6xl font-bold mb-4">
          Bit Matrix
        </h1>

        <h2 className="text-3xl text-orange-400 mb-6">
          The Home Miner&apos;s Network
        </h2>

        <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-10">
          Track your miner. Build your reputation. Chase the next block.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Bitcoin Network
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">
              Bitcoin API Status
            </p>

            <p className="text-3xl font-bold text-green-400">
              Online
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">
              Data Source
            </p>

            <p className="text-xl font-bold text-orange-400">
              mempool.space
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">
              Endpoint
            </p>

            <p className="text-lg font-bold text-orange-400">
              /api/bitcoin
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">
              Status
            </p>

            <p className="text-3xl font-bold text-green-400">
              Live
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Bit Matrix Pool
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">Pool Hashrate</p>
            <p className="text-3xl font-bold">483 TH/s</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">Active Miners</p>
            <p className="text-3xl font-bold">61</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">Pool Luck</p>
            <p className="text-3xl font-bold text-green-400">
              103%
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-zinc-400">Expected Block</p>
            <p className="text-3xl font-bold text-orange-400">
              42 Days
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}