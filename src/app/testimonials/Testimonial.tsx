import { LINKEDIN_RECOMMENDATIONS_URL } from '@/constants'
import { ITestimonial } from '@/types'
import Image from 'next/image'
import React from 'react'

interface TestimonialProps {
  testimonial: ITestimonial
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  const {
    author: { avatar, name, title, company, linkedInUrl },
    feedback,
  } = testimonial

  return (
    <figure className="dark:highlight-white/5 relative flex flex-col rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
      <figcaption className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt={`Profile picture of ${name}`}
          className="h-14 w-14 flex-none rounded-full object-cover"
          width={56}
          height={56}
        />
        <div className="flex-auto">
          <div className="text-base font-semibold text-slate-900 dark:text-slate-300">
            <a href={LINKEDIN_RECOMMENDATIONS_URL}>{name}</a>
          </div>
          <div className="mt-0.5">
            <a href={LINKEDIN_RECOMMENDATIONS_URL}>
              {title} at {company}
            </a>
          </div>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
        <a href={LINKEDIN_RECOMMENDATIONS_URL} target="_blank">
          <p>{`"${feedback}"`}</p>
        </a>
      </blockquote>
    </figure>
  )
}

export default Testimonial
