'use client'

import { BarGraph } from '../components/BarGraph'

const data = [
  {
    color: '#8884d8',
    name: 'Coding',
    value: 80,
  },
  {
    color: '#83a6ed',
    name: 'Mentoring',
    value: 60,
  },
  {
    color: '#8dd1e1',
    name: 'Lifting',
    value: 40,
  },
  {
    color: '#82ca9d',
    name: 'Guitar',
    value: 40,
  },
  {
    color: '#a4de6c',
    name: 'Keyboard',
    value: 60,
  },
  {
    color: '#a4de6c',
    name: 'Renovation/DIY',
    value: 30,
  },
]

export default function About() {
  return (
    <div>
      <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
        How do I stay occupied?
      </h2>
      <BarGraph />
      <div className="mb-8 text-sm text-gray-800 dark:text-slate-400  sm:text-lg lg:mt-6">
        <p className="mb-8">
          {`I am currently working as Senior Software Engineer at Zendesk. I initially joined the admin center team developing and maintaining a micro-frontend platform called Admin Center with tech stacks such as Rails, React, Typescript, and Redux. Currently, I'm working on the team and license management domain delivering an easy-to-use team management experience that scales with customers and grows the business. I am also championing accessibility in the team to deliver inclusive Zendesk products.`}
        </p>
        <p>
          {`I fill up the rest of my time freelancing as a mentor, doing renovation projects around the house with my lovely wife. I love lifting weights and working out. I spent most of my early 20s playing around the pubs with my band as a guitarist (Rock n' roll days!). I started learning the keyboard last year and I am enjoying it! One of my goals is to walk into a public place and play a Coldplay song on the piano seemingly.`}
        </p>
      </div>
    </div>
  )
}
