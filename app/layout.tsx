import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { inter } from "./fonts";

export const metadata = {
  title: {
    default: "Julio Ottaviano — Marketing & Growth Systems Strategist",
    template: "%s | Julio Ottaviano",
  },
  description:
    "Marketing & Growth Systems Strategist designing scalable marketing systems across international markets.",
  openGraph: {
    title: "Julio Ottaviano — Marketing & Growth Systems Strategist",
    description:
      "Designing scalable marketing systems that connect segmentation, unit economics, and execution across international markets.",
    url: "https://julioottaviano.com",
    siteName: "Julio Ottaviano",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Ottaviano — Marketing & Growth Systems Strategist",
    description:
      "Designing scalable marketing systems that connect segmentation, unit economics, and execution across international markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-stone-50 text-stone-900 antialiased`}
      >
        <nav className="border-b border-stone-200">
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-6 flex gap-8 text-sm text-stone-600">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link
              href="/work"
              className="hover:text-stone-900 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/thinking"
              className="hover:text-stone-900 transition-colors"
            >
              Thinking
            </Link>
            <Link
              href="/about"
              className="hover:text-stone-900 transition-colors"
            >
              About
            </Link>
          </div>
        </nav>

        {children}
        <footer className="border-t border-stone-200 mt-24">
  <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 text-sm text-stone-500">
    <p>
      © {new Date().getFullYear()} Julio Ottaviano
    </p>
  </div>
</footer>
      </body>
    </html>
  );
}