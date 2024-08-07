import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beaten but renewed",
  description: "A story of redemption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "h-screen w-screen")}
        style={{
          background:
            "url(/images/background.jpg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
