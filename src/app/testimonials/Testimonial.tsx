import { LINKEDIN_RECOMMENDATIONS_URL } from '@/constants'
import { ITestimonial } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa'

interface TestimonialProps {
  testimonial: ITestimonial
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  const {
    author: { avatar, name, title, company, linkedInUrl },
    feedback,
  } = testimonial

  return (
    <figure className="dark:highlight-white/5 relative flex flex-col rounded-lg bg-slate-100 p-4 shadow-sm dark:bg-slate-800">
      <figcaption className="flex items-center space-x-4">
        {avatar ? (
          <Image
            src={avatar}
            alt={`Profile picture of ${name}`}
            className="h-14 w-14 flex-none rounded-full object-cover"
            width={56}
            height={56}
          />
        ) : (
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
            <FaUser size={32} className="text-gray-400 dark:text-slate-800" />
          </div>
        )}
        <div className="flex-auto">
          <div className="text-base font-semibold text-slate-800 dark:text-slate-300">
            <a href={linkedInUrl} target="_blank">
              {name}
            </a>
          </div>
          <div className="mt-0.5">
            <a href={LINKEDIN_RECOMMENDATIONS_URL}>
              {title} {company && `at ${company}`}
            </a>
          </div>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
        <a href={LINKEDIN_RECOMMENDATIONS_URL} target="_blank">
          <p className="before:content-['“'] after:content-['”']">{feedback}</p>
        </a>
      </blockquote>
    </figure>
  )
}

export default Testimonial
