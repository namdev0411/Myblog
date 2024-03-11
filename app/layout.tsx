import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { getServerSession } from "next-auth";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Nam nguyen",
  description: "Chao mung ban den voi blog cua toi",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="vi">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-slate-100`}
      >
        <NextAuthProvider session={session}>
          <div className="h-32 bg-blue-200 p-3 bg-white">
            <Header className="w-4/5 mx-auto" />
          </div>
          <div className="w-4/5 mx-auto flex-1">
            <div>{children}</div>
          </div>
          <div className="h-32 bg-red-300">Footer</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
