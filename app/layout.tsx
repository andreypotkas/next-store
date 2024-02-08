import { PrimeReactProviders } from "@/app/providers";
import Layout from "@/layout/layout";
import "@/styles/globals.scss";
import "@/styles/primereact.scss";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/viva-dark/theme.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "RunConnect | Sport Community",
  description: "Community of athletes! Train, compete, socialize and find friends who also love sports!",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "RunConnect | Sport Community",
    url: "https://runconnect.ru/",
    description: "Community of athletes! Train, compete, socialize and find friends who also love sports!",
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <PrimeReactProviders>
          <Layout>{children}</Layout>
        </PrimeReactProviders>
      </body>
    </html>
  );
}
