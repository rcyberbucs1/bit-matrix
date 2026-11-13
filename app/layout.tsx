import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bit Matrix",
  description: "The Home Miner's Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white">
        <nav className="border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-orange-400">
                BIT MATRIX
              </h1>

              <p className="text-xs text-zinc-500">
                The Home Miner&apos;s Network
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-orange-400">
                Network
              </Link>

              <Link
                href="/miners"
                className="hover:text-orange-400"
              >
                Miners
              </Link>

              <Link
                href="/leaderboards"
                className="hover:text-orange-400"
              >
                Leaderboards
              </Link>

              <Link
                href="/hall-of-fame"
                className="hover:text-orange-400"
              >
                Hall of Fame
              </Link>

              <Link
                href="/pool"
                className="hover:text-orange-400"
              >
                Pool
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}