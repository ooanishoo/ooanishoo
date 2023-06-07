import { ITestimonial } from '@/types'
import Image from 'next/image'
import React from 'react'

interface TestimonialProps {
  testimonial: ITestimonial
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  const { avatar, linkedIn, name, title, company, feedback } = testimonial
  return (
    <figure className="dark:highlight-white/5 relative flex flex-col rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
      <figcaption className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt="name"
          className="h-14 w-14 flex-none rounded-full object-cover"
          width={56}
          height={56}
        />
        <div className="flex-auto">
          <div className="text-base font-semibold text-slate-900 dark:text-slate-300">
            <a href={linkedIn} tabIndex={0}>
              <span className="absolute inset-0"></span>
              {name}
            </a>
          </div>
          <div className="mt-0.5">
            {title} at {company}
          </div>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
        <p>{feedback}</p>
      </blockquote>
    </figure>
  )
}

export default Testimonial
