import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Maheen Abrar — Full-Stack Web Developer",
  description:
    "Official portfolio of Maheen Abrar. Full-Stack Web Developer engineering intuitive, high-performance web applications with React, Next.js, Node.js, and modern databases.",
  keywords: [
    "Maheen Abrar",
    "Full-Stack Web Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Maheen Abrar" }],
  creator: "Maheen Abrar",
  openGraph: {
    title: "Maheen Abrar — Full-Stack Web Developer",
    description: "Crafting digital experiences with purpose. Think. Build. Deploy.",
    url: "https://maheen-portfolio-gamma.vercel.app/",
    siteName: "Maheen Abrar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheen Abrar — Full-Stack Web Developer",
    description: "Crafting digital experiences with purpose. Think. Build. Deploy.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#040508",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-[#040508]`}
    >
      <body className="min-h-screen flex flex-col bg-[#040508] text-[#f1f5f9] relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
