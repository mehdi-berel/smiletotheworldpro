import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import CookieConsent from "./components/CookieConsent"
import { AuthProvider } from './components/auth/AuthContext'
import { ThemeProvider } from './components/providers/ThemeProvider'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SmileToTheWorld Pro - Dental Design Solutions",
    template: "%s | SmileToTheWorld Pro"
  },
  description: "Professional dental design solutions for modern dental practices. Transform your dental practice with cutting-edge technology and innovative solutions.",
  keywords: ["dental design", "dental practice management", "dental technology", "dental solutions", "dental practice transformation"],
  authors: [{ name: "SmileToTheWorld Pro" }],
  creator: "SmileToTheWorld Pro",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
