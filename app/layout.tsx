
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdtt.in"),
  title: {
    default: "MDTT Tech Solutions | Building Digital Solutions",
    template: "%s | MDTT Tech Solutions",
  },
  description:
    "MDTT Tech Solutions is an emerging Indian IT and software development company building scalable digital products like MDTT and MDTT New, while offering practical software development internship programs.",
  keywords: [
    "MDTT Tech Solutions",
    "Software Development Company India",
    "Web Application Development",
    "MDTT Marketplace",
    "MDTT New",
    "Software Development Internship",
    "IT Company in India",
  ],
  applicationName: "MDTT Tech Solutions",
  openGraph: {
    title: "MDTT Tech Solutions | Building Digital Solutions",
    description:
      "Building scalable digital products and empowering future innovators through real-world software development.",
    siteName: "MDTT Tech Solutions",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#060913] text-slate-100">
        {children}
      </body>
    </html>
  );
}
