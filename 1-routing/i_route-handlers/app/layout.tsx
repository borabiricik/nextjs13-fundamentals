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
      <body
        className={classnames(
          inter.className,
          "flex justify-center items-center md:max-w-[50%] max-w-full mx-auto min-h-screen px-4"
        )}
      >
        {children}
      </body>
    </html>
  );
}