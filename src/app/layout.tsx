import { Nav } from './components/Nav'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Providers from './components/Providers'
import { Footer } from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })
const inter = Inter({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Anish Maharjan',
  description: 'Senior Software Engineer | Mentor',
  openGraph: {
    images: '/opengraph-image.png',
  },
  siteName: 'Anish Maharjan',
  metadataBase: new URL('https://anish-dev.com'),
  locale: 'en_US',
  type: 'website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body
        className={`tracking-wider ${poppins.className} mx-auto  text-slate-500 lg:container dark:bg-gray-950 dark:text-slate-400`}
      >
        <Providers>
          <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
            <header>
              <Nav />
            </header>
            <main className="mx-auto mt-24  px-4 lg:container sm:mt-28 sm:px-6  lg:mt-32 lg:px-8 xl:pt-14">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
