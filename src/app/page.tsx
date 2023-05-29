'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex py-12 justify-normal gap-12">
      <div className="flex-initial w-full max-w-[500px]">
        <Image
          src="/anish.jpg"
          alt="Picture of Anish Maharjan"
          width={500}
          height={500}
          className="rounded-3xl min-w-[300px] min-h-[300px] shadow-2xl hover:-translate-y-1 hover:scale-110 duration-700"
        />
      </div>
      <div className="flex-auto">
        <h2 className="text-4xl pt-2">{`Hi, I'm Anish. Nice to meet you!`}</h2>
        <p className="text-2xl text-gray-800 dark:text-slate-200 mt-12">
          {`I'm a Software Engineer based in Melbourne. I love to design and write clean codes. I'm passionate about building useable products that solve real customer problems.`}
        </p>
        <div className="font-medium text-xl mt-12 py-2 hover:animate-pulse">
          <Link href="/about">Learn more about me</Link>
        </div>
      </div>
    </div>
  )
}
