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
        className={`mx-auto max-w-3xl overflow-x-hidden px-8 md:px-24 xl:max-w-[1920px]  ${roboto_mono.className} dark:bg-slate-950 dark:text-slate-300`}
      >
        <Providers>
          <header>
            <Nav />
          </header>
          <main className="mt-12">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
