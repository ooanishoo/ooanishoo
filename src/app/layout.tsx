import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Nav } from './page'

const inter = Roboto_Mono({ subsets: ['latin'] })

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
    <html lang="en">
      <body
        className={`mx-auto overflow-x-hidden px-24 max-w-[1920px] ${inter.className}`}
      >
        <header>
          <Nav />
        </header>
        <main className="mt-12">{children}</main>
      </body>
    </html>
  )
}
