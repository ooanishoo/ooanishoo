import Image from 'next/image'

export const Nav = () => (
  <nav className="flex flex-row justify-between items-center pt-6">
    <Image src="/ooanishoo.png" alt="me" width="64" height="64" />
    <ul className="flex justify-end flex-auto  gap-12 px-6 items-center">
      <li>About</li>
      <li>Testimonials</li>
      <li>Tools</li>
      <li>Contact</li>
    </ul>
    <div className="px-4">Dark mode</div>
  </nav>
)
