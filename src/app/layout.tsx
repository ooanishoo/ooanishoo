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
        className={`mx-auto overflow-x-hidden px-24 max-w-[1920px]  ${roboto_mono.className}`}
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
