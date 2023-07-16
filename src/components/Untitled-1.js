/* eslint-disable react/no-unescaped-entities */
'use client'
import Image, { StaticImageData } from 'next/image'
import { BarGraph } from '.@/components/BarGraph'
import deskPic from '../../../public/desk.jpeg'

export default function About() {
  return (
    <div>
      <section>
        <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
          {`Welcome to my little corner of the internet!`}
        </h2>
        <p className="mb-8 mt-6 text-sm text-gray-800  dark:text-slate-400 sm:text-lg">
          👋🏻 Hi friends, My name is Anish. I was born and raised in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Kathmandu"
            title="Link to Kathmandu wikipedia page"
            className="font-extrabold text-sky-500 hover:animate-pulse"
            target="_blank"
          >
            Kathmandu, Nepal.
          </a>
        </p>
        <p className="mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400 sm:text-lg sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
          {`As a kid, I always wanted to be an artist. I just could not wait for the art classes to start when I was in school. I used to spend my weekends sketching, painting, and drawing portraits. After my beloved art teacher passed away, my mom suggested I should learn to play an instrument from my cousin who was a musician/songwriter. I picked up a guitar and started learning music. Later, during my early 20s, I played around local pubs and venues with my band as a guitarist.`}
        </p>
        <p className="mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400 sm:text-lg sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
          {`
        After graduating with Bachelors of Information Management degree, I
        moved to the beautiful city Melbourne, Australia.
        `}
        </p>
      </section>
      <section>
        <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
          How do I stay occupied?
        </h2>
        <BarGraph />
        <div className="mb-8 text-sm text-gray-800 dark:text-slate-400  sm:text-lg lg:mt-6">
          <p className="mb-8 text-sm text-gray-800 dark:text-slate-400 sm:text-lg sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
            I am currently working as Senior Software Engineer at{' '}
            <a
              href="https://www.linkedin.com/company/zendesk"
              title="Link to Zendesk linked in profile"
              className="font-extrabold text-sky-500 hover:animate-pulse"
              target="_blank"
            >
              Zendesk
            </a>
            . I initially joined the admin center team developing and
            maintaining a micro-frontend platform called Admin Center with tech
            stacks such as Rails, React, Typescript, and Redux. Currently, I'm
            working on the team and license management domain delivering an
            easy-to-use team management experience that scales with customers
            and grows the business. I am also championing accessibility in the
            team to deliver inclusive Zendesk products.
          </p>
          <p className="mb-8 text-sm text-gray-800 dark:text-slate-400 sm:text-lg sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
            {`I fill up the rest of my time freelancing as a mentor, doing renovation projects around the house with my lovely wife. I love lifting weights and working out. Last year, I started learning the keyboard and I am enjoying it! One of my goals is to walk into a public place and play a Coldplay song on the piano seemingly.`}
          </p>
        </div>
      </section>
      <section>
        <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
          Peek behind the curtain
        </h2>
        <p className="mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400 sm:text-lg sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal">
          Here are some random fun facts about me:
        </p>
        <div className="grid grid-cols-1 gap-8 text-sm  lg:grid-cols-2 xl:grid-cols-3">
          {funFacts.map((fact, _i) => (
            <Card key={_i} {...fact} />
          ))}
        </div>
      </section>
    </div>
  )
}

interface ICardProps {
  image: {
    src: StaticImageData
    alt: string
  }
  title: string
  description: string
}

const funFacts = [
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: 'My wife and I have similar names.',
    description:
      "My wife's name is Anisha. We are Anish and Anisha. No, we didn't changed our names after we met",
  },
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: "I don't like milk on my coffee.",
    description:
      'I like my coffee just black in its purest form, without any additions or alterations.',
  },
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: "I don't play video games.",
    description:
      "I used to play a lot of video games growing up and got hooked to it. I feel like if I start playing again, I'll get addicted to it.",
  },
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: "I'm a neat freak",
    description:
      "I like to keep my things organized and clean. I can't stand a messy desk or a messy room.",
  },
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: "I've busked in Melbourne CBD",
    description:
      'Back in 2017, I used to busk with my band in Melbourne CBD. We used to play covers of popular songs and some of our originals. It was a great experience.',
  },
  {
    image: {
      src: deskPic,
      alt: 'Picture of Anish Maharjan',
    },
    title: 'My wife and I have similar names.',
    description:
      "My wife's name is Anisha. We are Anish and Anisha. No, we didn't changed our names after we met",
  },
]
const Card = ({ image, title, description }: ICardProps) => (
  <div className="max-w-full rounded-lg border border-gray-200 bg-slate-100 shadow-sm dark:border-gray-700 dark:bg-slate-800 ">
    <Image
      src={image.src}
      alt={image.alt}
      className="max-w-fulll w-full  shadow-lg duration-700 "
    />
    <div className="p-4">
      <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-xl">
        {title}
      </h2>
      <p className=" mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400  sm:text-lg">
        {description}
      </p>
    </div>
  </div>
)
