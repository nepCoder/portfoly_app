import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/public/styles/globals.css";
import Script from "next/script";
import OwnersView from "@/public/views/owners-view/OwnersView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEPCODER",
  description: "~"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <title>NEPCODER</title>
      </head>
      <Script src="https://cdn.tailwindcss.com" />
      <body className={inter.className}>
        <OwnersView children={children} />
      </body>
    </html>
  );
}
