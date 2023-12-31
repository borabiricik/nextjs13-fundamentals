import classnames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classnames(inter.className, "m-4")}>
        <header className="text-4xl border-b border-white py-3">
          Linking and Navigating
        </header>
        <main className="py-3">{children}</main>
      </body>
    </html>
  );
}
