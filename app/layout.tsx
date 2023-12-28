import Link from "next/link";
import "./globals.css";
//import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sushh.dev🍃",
  description: "My Digital Garden",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-custom-color text-slate-50 ${GeistSans.className}`}
      >
        <div className="max-w-2xl mx-auto py-10 px-4">
          <header>
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold mr-4 pb-12">
                sushh.dev🍃
              </Link>

              <nav className="ml-auto text-sm font-medium space-x-6">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
                <Link href="https://cv.sushh.dev/" className="hover:underline">
                  Resume
                </Link>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
