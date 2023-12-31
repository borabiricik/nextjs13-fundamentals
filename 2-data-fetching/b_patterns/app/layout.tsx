import classNames from "classnames"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "flex items-center justify-center min-h-screen flex-col space-y-6 w-full md:w-1/2 mx-auto"
        )}
      >
        <h1 className="text-4xl">👽 Data Fetcing & Patterns</h1>
        {children}
      </body>
    </html>
  )
}
