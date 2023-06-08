'use client'
import Image from 'next/image'
import profilePic from '../../public/anish.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mt-2 flex flex-col items-center gap-4 sm:items-start sm:gap-6 md:flex-row lg:gap-8 ">
      <Image
        src={profilePic}
        alt="Picture of Anish Maharjan"
        className="w-full max-w-2xl rounded-3xl shadow-lg duration-700 md:max-w-sm lg:max-w-lg"
      />
      <div className="flex-auto">
        <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">{`Hi, I'm Anish. Nice to meet you!`}</h2>
        <p className="mt-6 text-sm text-gray-800 dark:text-slate-400 sm:mt-10 sm:text-lg xl:max-w-3xl">
          {`I'm a Software Engineer based in Melbourne. I love to design and write clean codes. I'm passionate about building useable products that solve real customer problems.`}
        </p>
        <p className="mt-6 py-2 text-sm font-semibold text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400  sm:text-lg lg:mt-10">
          <Link href="/about">Learn more about me</Link>
        </p>
      </div>
    </div>
  )
}
