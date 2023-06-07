import { ITestimonial } from '@/types'
import Image from 'next/image'
import Testimonial from './Testimonial'

const testimonials: ITestimonial[] = [
  {
    avatar: 'https://thispersondoesnotexist.com/',
    name: 'John Doe',
    title: 'Design Lead',
    linkedIn: 'https://www.linkedin.com/',
    company: 'Apple',
    feedback:
      'Lorem eiusmod veniam sunt anim irure esse non dolor fugiat. Ex mollit eu pariatur ad cillum mollit. Magna amet cupidatat nisi occaecat ullamco qui in exercitation. Anim incididunt mollit anim dolor ullamco. Amet Lorem consectetur adipisicing sint.',
  },
]

const feedbacks = Array.from({ length: 13 }, () => testimonials[0])
const generateFeedbacks = () =>
  feedbacks.map((testimonial, index) => (
    <li key={index} className="text-sm leading-6">
      <Testimonial key={index} testimonial={testimonial} />
    </li>
  ))

export default function Testimonials() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6   lg:grid-cols-2 lg:gap-8  xl:grid-cols-3">
        <ul className="space-y-8">{generateFeedbacks()}</ul>
        <ul className="hidden space-y-8 lg:block">{generateFeedbacks()}</ul>
        <ul className="hidden space-y-8 xl:block">{generateFeedbacks()}</ul>
      </div>
    </div>
  )
}
