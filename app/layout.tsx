import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/utils/cn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kill Procrastination",
  description: "Kill Procrastination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <header className="border-b border-gray-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link href="/">Kill Procrastination</Link>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/daily"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Daily
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow w-full">{children}</main>
        <footer className="border-t border-gray-600 text-white p-4 mt-auto mb-[93px] lg:mb-0">
          <div className="container mx-auto text-center">
            © {new Date().getFullYear()} Kill Procrastination
          </div>
        </footer>
      </body>
    </html>
  );
}
