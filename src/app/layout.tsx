import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const neue = localFont({
  src: [
    {
      path: "../assets/font/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/font/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
  display: "swap",
})

export const metadata: Metadata = {
  title: "W I M Architect",
  description: "Materialise dreams.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${neue.variable} antialiased`}>
      <body className='font-sans'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
