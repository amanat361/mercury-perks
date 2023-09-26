import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Mercury Perks by Sam",
  description: "A redesigned perk page for Mercury.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex relative">
          <Sidebar />
          <div className="flex-1 flex justify-center ml-[13.5rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}
