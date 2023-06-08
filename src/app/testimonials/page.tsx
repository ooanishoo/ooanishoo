import { ITestimonial } from '@/types'
import Image from 'next/image'
import Testimonial from './Testimonial'
import { colleagues, mentees, data, testimonials } from './testimonials'

const feedbacks = Array.from({ length: 13 }, () => data[0])

const generateDummyFeedbacks = () =>
  feedbacks.map((testimonial, index) => (
    <li key={index} className="text-sm leading-6">
      <Testimonial key={index} testimonial={testimonial} />
    </li>
  ))

export default function Testimonials() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6   lg:grid-cols-2 lg:gap-8  xl:grid-cols-3">
        <ul className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="text-sm leading-6">
              <Testimonial key={index} testimonial={testimonial} />
            </li>
          ))}
        </ul>
        <ul className="hidden space-y-8 lg:block">
          {mentees.map((testimonial, index) => (
            <li key={index} className="text-sm leading-6">
              <Testimonial key={index} testimonial={testimonial} />
            </li>
          ))}
        </ul>
        <ul className="hidden space-y-8 xl:block">
          {generateDummyFeedbacks()}
        </ul>
      </div>
    </div>
  )
}
