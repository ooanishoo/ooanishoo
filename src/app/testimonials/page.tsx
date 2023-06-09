import { ITestimonial } from '@/types'
import Image from 'next/image'
import Testimonial from './Testimonial'
import { testimonials } from './testimonials'

export default function Testimonials() {
  return (
    <div>
      <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
        The word on the street
      </h2>
      <p className=" mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400  sm:text-lg">
        {`Through out my carreer, I've had the opportunity to work alongside exceptional designers, engineers, and product managers. Here are some genuine
        feedback and firsthand experiences shared by my co-workers and mentees about me.`}
      </p>
      <div className="grid grid-cols-1 gap-8 text-sm  lg:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={`space-y-8 
          ${i === 1 && 'hidden sm:block'}
          ${i === 2 && 'hidden lg:block'}`}
          >
            {column.map((testimonial, index) => (
              <li key={index} className="text-sm leading-6">
                <Testimonial testimonial={testimonial} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
