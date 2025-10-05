import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Cliff and Tony Energy — Power Systems Engineering',
  description: 'Independent engineering consulting: grid integration, compliance studies, and owner\'s engineer services.',
  metadataBase: new URL('https://cliffandtonyenergy.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Cliff and Tony Energy — Power Systems Engineering',
    description: 'Independent engineering consulting: grid integration, compliance studies, and owner\'s engineer services.',
    images: ['/logo-main.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
