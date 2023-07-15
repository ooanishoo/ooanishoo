import { ITestimonial } from '@/types'
import { linkedInTestimonials } from './testimonials'

const shuffleArray = <T>(arr: T[]): T[] => {
  const shuffledArray = [...arr]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}

export const generateTestimonials = (
  testimonials: ITestimonial[]
): ITestimonial[][] => {
  const total = Math.floor(testimonials.length)
  const endIndex = total / 3

  return [
    shuffleArray([...linkedInTestimonials.slice(0, endIndex)]),
    shuffleArray([...linkedInTestimonials.slice(endIndex, endIndex * 2)]),
    shuffleArray([...linkedInTestimonials.slice(endIndex * 2)]),
  ]
}
