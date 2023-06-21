'use client'
import Image from 'next/image'
import profilePic from '../../public/anish.jpg'
import deskPic from '../../public/desk.jpeg'
import Link from 'next/link'
import { BarGraph } from './components/BarGraph'

export default function Home() {
  return (
    <section className="flex flex-col gap-20 lg:gap-60">
      <div className="flex flex-col items-center gap-4 sm:items-start sm:gap-6 md:flex-row lg:gap-8 ">
        <Image
          src={profilePic}
          alt="Picture of Anish Maharjan"
          className="w-full max-w-2xl rounded-3xl shadow-lg duration-700 md:max-w-sm lg:max-w-lg"
        />
        <div className="flex-auto">
          <h2 className="mb-10 pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">{`Hi, I'm Anish. Nice to meet you!`}</h2>
          <p className="mt-6 text-sm font-light text-gray-500 dark:text-slate-500 sm:mt-10 sm:text-lg lg:text-2xl  xl:max-w-3xl xl:text-4xl">
            {`I'm a Software Engineer based in Melbourne. I love to design and write clean codes. I'm passionate about building useable products that solve real customer problems.`}
          </p>
          <p className="group mt-6 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl">
            <Link href="/about">Get to know me</Link>
            <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[84px]" />
          </p>
        </div>
      </div>
      <div>
        <BarGraph />
        <h2 className="mb-10 pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:mt-16 lg:text-4xl">
          How do I spend my time?
        </h2>
        <p className="mt-6 text-sm font-light text-gray-500 dark:text-slate-500 sm:mt-10 sm:text-lg   lg:text-2xl xl:text-4xl">
          {`Here is a quick overview of what I'm currently up to these days.`}
        </p>
        <p className="group mt-6 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl">
          <Link href="/about">See a day in my life</Link>
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[84px]" />
        </p>
      </div>
      <div className="flex flex-col-reverse items-start gap-4 sm:items-start sm:gap-6 lg:gap-8 xl:flex-row ">
        <div>
          <h2 className="mb-10 pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
            Curious to checkout my toolbox?
          </h2>
          <p className="mb-8 mt-6 text-sm font-light text-gray-500  dark:text-slate-500 sm:text-lg lg:text-2xl xl:text-3xl">
            {` I maintain an up-to-date "uses" page that lists all the things I
            use.`}
          </p>
          <p className="group mt-6 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl">
            <Link href="/uses">View my toolbox</Link>
            <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[84px]" />
          </p>
        </div>
        <Image
          src={deskPic}
          alt="Anish's desk setup"
          className="w-full max-w-6xl rounded-3xl shadow-lg duration-700 xl:max-w-3xl"
        />
      </div>
    </section>
  )
}
