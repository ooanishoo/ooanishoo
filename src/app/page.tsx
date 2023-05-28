import Image from 'next/image'
import Link from 'next/link'

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

export default function Home() {
  return (
    <div className="flex py-12 justify-normal gap-12">
      <div className="flex-initial w-full max-w-[500px]">
        <Image
          src="/anish.jpg"
          alt="Picture of Anish Maharjan"
          width={500}
          height={500}
          className="rounded-3xl min-w-[300px] min-h-[300px] shadow-2xl"
        />
      </div>
      <div className="flex-auto">
        <h2 className="text-4xl pt-2">{`Hi, I'm Anish. Nice to meet you!`}</h2>
        <p className="text-2xl text-gray-400 dark:text-slate-500 mt-12">
          {`I'm a Software Engineer based in Melbourne. I love to design and write clean codes. I'm passionate about building useable products that solve real customer problems.`}
        </p>
        <div className="font-medium text-xl mt-12 py-2 hover:animate-pulse">
          <Link href="/about">Learn more about me</Link>
        </div>
      </div>
    </div>
  )
}
