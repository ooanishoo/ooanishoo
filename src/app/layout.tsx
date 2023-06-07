import { Nav } from './components/Nav'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Providers from './components/Providers'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

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
        className={`overflow-x-hidden ${roboto_mono.className} mx-auto text-slate-500 lg:container dark:text-slate-400`}
      >
        <Providers>
          <header className="w-full text-sm font-semibold">
            <Nav />
          </header>
          <main className="mx-auto mt-12 px-4 lg:container sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
