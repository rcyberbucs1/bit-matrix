export default function HallOfFamePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}

      <section className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-5xl font-bold text-orange-400">
            Hall of Fame
          </h1>

          <p className="mt-4 text-zinc-400">
            The legends of the Bit Matrix network.
          </p>
        </div>
      </section>

      {/* Records */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          🏆 Network Records
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400 mb-2">
              Highest Share Ever
            </p>

            <p className="text-3xl font-bold text-orange-400">
              102.5G
            </p>

            <p className="mt-2">
              Rick&apos;s NerdQaxe
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400 mb-2">
              Longest Uptime
            </p>

            <p className="text-3xl font-bold text-orange-400">
              487 Days
            </p>

            <p className="mt-2">
              Alpha Miner
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400 mb-2">
              Most Shares Submitted
            </p>

            <p className="text-3xl font-bold text-orange-400">
              4.2M
            </p>

            <p className="mt-2">
              Hash King
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400 mb-2">
              First Pool Block
            </p>

            <p className="text-3xl font-bold text-green-400">
              OPEN
            </p>

            <p className="mt-2">
              Waiting for the first legend.
            </p>
          </div>
        </div>
      </section>

      {/* 100G Club */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          ⚡ 100G Club
        </h2>

        <div className="bg-zinc-900 rounded-xl p-6">
          <div className="space-y-3">
            <p>🥇 Rick&apos;s NerdQaxe</p>
            <p>🥈 Future Member</p>
            <p>🥉 Future Member</p>
          </div>
        </div>
      </section>

      {/* Block Finders */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          👑 Block Finders
        </h2>

        <div className="bg-zinc-900 rounded-xl p-6">
          <p className="text-zinc-400">
            No Bit Matrix blocks found yet.
          </p>

          <p className="mt-2 text-orange-400">
            Your miner could be the first.
          </p>
        </div>
      </section>

      {/* Legends */}

      <section className="max-w-7xl mx-auto px-6 py-10 pb-20">
        <h2 className="text-3xl font-bold mb-6">
          🔥 Legendary Miners
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              Rick&apos;s NerdQaxe
            </h3>

            <p className="mt-2 text-zinc-400">
              Highest Share Record Holder
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              Alpha Miner
            </h3>

            <p className="mt-2 text-zinc-400">
              Uptime Champion
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="font-bold text-orange-400">
              Hash King
            </h3>

            <p className="mt-2 text-zinc-400">
              Share Submission Champion
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}