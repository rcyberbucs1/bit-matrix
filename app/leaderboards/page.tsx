import Link from "next/link";

export default function LeaderboardsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-orange-400">
            Leaderboards
          </h1>

          <p className="mt-3 text-zinc-400">
            The top miners in the Bit Matrix network.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">
          🏆 Best Share All Time
        </h2>

        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Miner</th>
                <th className="p-4 text-left">Best Share</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4">🥇</td>

                <td className="p-4">
                  <Link
                    href="/u/rick"
                    className="text-orange-400 hover:underline"
                  >
                    Rick&apos;s NerdQaxe
                  </Link>
                </td>

                <td className="p-4">52.1G</td>
              </tr>

              <tr>
                <td className="p-4">🥈</td>
                <td className="p-4">Jane&apos;s Gamma</td>
                <td className="p-4">48.9G</td>
              </tr>

              <tr>
                <td className="p-4">🥉</td>
                <td className="p-4">Hash King</td>
                <td className="p-4">41.7G</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">
          ⚡ Longest Uptime
        </h2>

        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Miner</th>
                <th className="p-4 text-left">Days</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4">🥇</td>
                <td className="p-4">Alpha Miner</td>
                <td className="p-4">487</td>
              </tr>

              <tr>
                <td className="p-4">🥈</td>
                <td className="p-4">Gamma Beast</td>
                <td className="p-4">310</td>
              </tr>

              <tr>
                <td className="p-4">🥉</td>
                <td className="p-4">Florida Hash</td>
                <td className="p-4">201</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">
          🔥 Most Shares Submitted
        </h2>

        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="p-4 text-left">Rank</th>
                <th className="p-4 text-left">Miner</th>
                <th className="p-4 text-left">Shares</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4">🥇</td>
                <td className="p-4">Hash King</td>
                <td className="p-4">4,200,000</td>
              </tr>

              <tr>
                <td className="p-4">🥈</td>

                <td className="p-4">
                  <Link
                    href="/u/rick"
                    className="text-orange-400 hover:underline"
                  >
                    Rick&apos;s NerdQaxe
                  </Link>
                </td>

                <td className="p-4">3,800,000</td>
              </tr>

              <tr>
                <td className="p-4">🥉</td>
                <td className="p-4">Pool Monster</td>
                <td className="p-4">3,100,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <h2 className="text-3xl font-bold mb-4">
          🎯 Closest To A Block
        </h2>

        <div className="bg-zinc-900 rounded-xl border border-orange-500 p-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Rick&apos;s NerdQaxe
          </h3>

          <p className="mb-2">
            Best Share: 52.1G
          </p>

          <p className="mb-2">
            Rank: #1
          </p>

          <p className="text-green-400">
            Current Closest Miner In Bit Matrix
          </p>
        </div>
      </section>
    </main>
  );
}