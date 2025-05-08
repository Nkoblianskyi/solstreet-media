import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { CookieConsent } from "../components/cookie-consent"
import { PageTransition } from "../components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SolStreet Media | Agencia de Marketing Offline en Barcelona",
  description:
    "Agencia especializada en marketing offline: billboards, brochures, publicidad en transporte y metro en Barcelona, España.",
  keywords: [
    "marketing offline",
    "publicidad exterior",
    "billboards",
    "brochures",
    "publicidad en transporte",
    "Barcelona",
    "España",
  ],
  authors: [{ name: "SolStreet Media" }],
  creator: "SolStreet Media",
  publisher: "SolStreet Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://solstreetmedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SolStreet Media | Agencia de Marketing Offline en Barcelona",
    description:
      "Agencia especializada en marketing offline: billboards, brochures, publicidad en transporte y metro en Barcelona, España.",
    url: "https://solstreetmedia.com",
    siteName: "SolStreet Media",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolStreet Media | Agencia de Marketing Offline en Barcelona",
    description:
      "Agencia especializada en marketing offline: billboards, brochures, publicidad en transporte y metro en Barcelona, España.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
