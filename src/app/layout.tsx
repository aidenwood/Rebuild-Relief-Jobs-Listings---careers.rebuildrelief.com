import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "@fontsource-variable/mona-sans";
import "./globals.css";

const monaSans = localFont({
  src: "../../node_modules/@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Careers | Rebuild Relief",
  description:
    "Join Rebuild Relief — Australia's fastest-growing storm recovery company. Explore open positions across NSW & QLD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Rebuild Relief. All rights
                reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a
                  href="https://www.rebuildrelief.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  rebuildrelief.com.au
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
