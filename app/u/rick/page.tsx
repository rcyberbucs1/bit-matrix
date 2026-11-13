export default function RickProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Profile Header */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-zinc-900 rounded-xl p-8 border border-orange-500">
          <h1 className="text-5xl font-bold text-orange-400 mb-2">
            Rick's NerdQaxe
          </h1>

          <p className="text-zinc-400 text-lg">
            Member of the Bit Matrix Network
          </p>
        </div>
      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Current Hashrate</p>
            <p className="text-3xl font-bold text-orange-400">
              4.2 TH/s
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Uptime</p>
            <p className="text-3xl font-bold text-green-400">
              99.8%
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Best Share</p>
            <p className="text-3xl font-bold text-orange-400">
              52.1G
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <p className="text-zinc-400">Network Rank</p>
            <p className="text-3xl font-bold text-orange-400">
              #1
            </p>
          </div>
        </div>
      </section>

      {/* Badges */}

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Badges
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-zinc-900 rounded-xl p-4">
            ⚡ First Share
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            🔥 Top 10 Miner
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            🏆 Hall of Fame
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            ⚡ 10G Share Club
          </div>
        </div>
      </section>

      {/* Mining History */}

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Mining History
        </h2>

        <div className="bg-zinc-900 rounded-xl p-6">
          <p className="mb-3">
            Started Mining: November 2026
          </p>

          <p className="mb-3">
            Shares Submitted: 3.8 Million
          </p>

          <p className="mb-3">
            Best Share: 52.1G
          </p>

          <p>
            Current Leaderboard Position: #1
          </p>
        </div>
      </section>

      {/* Hall of Fame Status */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">
          Hall of Fame Status
        </h2>

        <div className="bg-zinc-900 rounded-xl p-6 border border-orange-500">
          <p className="text-xl text-orange-400 font-bold mb-4">
            Record Holder
          </p>

          <p>
            Currently holds the highest share record in Bit Matrix.
          </p>
        </div>
      </section>
    </main>
  );
}