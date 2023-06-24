'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect'
import profilePic from '../../public/anish.jpg'
import deskPic from '../../public/desk.jpeg'
import { BarGraph } from './components/BarGraph'
import Testimonials from './testimonials/page'

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
          <ReactTypingEffect
            className="text-2xl font-extrabold text-sky-500"
            typingDelay={200}
            speed={40}
            eraseSpeed={40}
            eraseDelay={1500}
            text={[`Software Engineer`, `Mentor`, `Musician`]}
          />
          <p className="mt-4 text-sm text-gray-500 dark:text-slate-500 sm:mt-10 sm:text-lg sm:leading-8  md:leading-9 lg:text-2xl lg:leading-10 xl:max-w-3xl xl:text-4xl xl:leading-normal">
            {`I love to design and build digital products that solve customer problems. I bring a unique blend of creativity and technical expertise to deliver user focused digital experiences.`}
          </p>
          <p className="group mt-4 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl">
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
        <p className="mt-4 text-sm text-gray-500 dark:text-slate-500 sm:mt-10 sm:text-lg   sm:leading-8 md:leading-9  lg:text-2xl  lg:leading-10 xl:text-4xl xl:leading-normal">
          {`Here is a quick overview of what I'm currently up to these days.`}
        </p>
        <p className="group mt-4 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl ">
          <Link href="/about">See a day in my life</Link>
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-[84px]" />
        </p>
      </div>
      <div className="flex flex-col-reverse items-start gap-4 sm:items-start sm:gap-6 lg:gap-8 xl:flex-row ">
        <div>
          <h2 className="mb-10 pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
            Curious to checkout my toolbox?
          </h2>
          <p className="mb-8 mt-4 text-sm text-gray-500  dark:text-slate-500 sm:text-lg sm:leading-8 md:leading-9  lg:text-2xl  lg:leading-10 xl:text-3xl xl:leading-normal">
            {` I maintain an up-to-date "uses" page that lists all the things I
            use.`}
          </p>
          <p className="group mt-4 py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl">
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
      <div>
        <h2 className="mb-10 pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
          Hear what people say about me
        </h2>
        <p className="mb-8 mt-4 text-sm text-gray-500  dark:text-slate-500 sm:text-lg sm:leading-8 md:leading-9  lg:text-2xl  lg:leading-10 xl:text-3xl xl:leading-normal">
          {` I've been fortunate to work with so many talented engineers, designers and product managers. See what they say about working with me`}
        </p>
        <section className="relative h-[600px] overflow-hidden" tabIndex={-1}>
          <Testimonials.Content />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pt-32 dark:from-slate-950" />
        </section>
        <p className="group mt-4  flex flex-col items-center py-2 text-sm font-bold text-slate-900 transition duration-300  dark:text-slate-200  sm:text-lg lg:mt-10 lg:text-xl ">
          <Link href="/testimonials">Read more...</Link>
          <span className="block h-0.5 w-0 bg-sky-600 transition-all duration-500 group-hover:w-[84px]" />
        </p>
      </div>
    </section>
  )
}
