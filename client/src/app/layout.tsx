import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '@/app/BootstrapClient';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from "@/components/ScrollToTop";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarkari Naukri",
  description: "Sarkari Naukri is a platform for government job seekers to find and apply for various job opportunities in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapClient />
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
