import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ThemeScript } from "@/components/theme-script";
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
  title: {
    default: "Careers | Rebuild Relief",
    template: "%s | Rebuild Relief Careers",
  },
  description:
    "Join Rebuild Relief — a rapidly growing Australian storm and hail damage recovery company. Browse open sales, coordination, and field roles across NSW & QLD. $70k base + uncapped commissions.",
  keywords: [
    "Rebuild Relief careers",
    "Rebuild Relief jobs",
    "storm damage jobs Australia",
    "hail damage repair jobs",
    "sales representative jobs NSW",
    "sales representative jobs QLD",
    "storm recovery careers",
    "roof inspection jobs",
    "insurance claims jobs Australia",
    "outdoor sales jobs Australia",
  ],
  authors: [{ name: "Rebuild Relief" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Rebuild Relief Careers",
    title: "Careers at Rebuild Relief — Storm Recovery Jobs Across Australia",
    description:
      "Help families recover after storms with earning potential of $100k–$150k+. Browse open positions in sales, customer engagement, and field operations across NSW & QLD.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Rebuild Relief",
    description:
      "Join a rapidly growing Australian storm recovery company. $70k base + uncapped commissions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
