'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 py-12 sm:items-start xl:flex-row">
      <div className="w-full max-w-lg">
        <Image
          src="/anish.jpg"
          alt="Picture of Anish Maharjan"
          width={500}
          height={500}
          className="w-3xl rounded-3xl shadow-2xl duration-700 hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <div className="flex-auto">
        <h2 className="break-normal pt-2 text-2xl sm:text-4xl">{`Hi, I'm Anish. Nice to meet you!`}</h2>
        <p className="mt-12 text-xl text-gray-800 dark:text-slate-200 sm:text-2xl">
          {`I'm a Software Engineer based in Melbourne. I love to design and write clean codes. I'm passionate about building useable products that solve real customer problems.`}
        </p>
        <div className="mt-12 py-2 text-xl font-medium hover:animate-pulse hover:underline sm:text-xl">
          <Link href="/about">Learn more about me</Link>
        </div>
      </div>
    </div>
  )
}
