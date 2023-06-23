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
          <header>
            <Nav />
          </header>
          <main className="mx-auto mt-24 min-h-[60vh] px-4 lg:container sm:mt-28 sm:px-6  lg:mt-32 lg:px-8 xl:pt-14">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
