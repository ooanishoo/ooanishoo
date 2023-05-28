import Image from 'next/image'
import Link from 'next/link'

interface INavigation {
  title: string
  link: string
}
const NAVIGATIONS: INavigation[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Testimonials',
    link: '/testimonials',
  },
  {
    title: 'Tools',
    link: '/tools',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

export const Nav = () => (
  <nav className="flex flex-row justify-between items-center pt-6">
    <Link href={'/'}>
      <Image src="/ooanishoo.png" alt="me" width="64" height="64" />
    </Link>

    <ul className="flex justify-end flex-auto  gap-12 px-6 items-center c">
      {NAVIGATIONS.map((nav, _index) => (
        <li key={_index}>
          <Link href={nav.link}>{nav.title}</Link>
        </li>
      ))}
    </ul>
    <div className="px-4">Dark mode</div>
  </nav>
)
