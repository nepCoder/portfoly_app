import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

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
      <Head>
            <Script src="https://cdn.tailwindcss.com" />
            <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
              {/* <style>
                .nav {
                  position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 999;
        }

                .active{
                  color:orange;
        }
              </style> */}
              <title>NEPCODER</title>
            </Head>
            <body className={inter.className}>
              {children}
            </body>
          </html>
          );
}
