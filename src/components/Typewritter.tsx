'use client'
import ReactTypingEffect from 'react-typing-effect'

export const Typewritter = () => {
  return (
    <ReactTypingEffect
      className="text-2xl font-extrabold text-sky-500"
      typingDelay={200}
      speed={40}
      eraseSpeed={40}
      eraseDelay={1500}
      text={[`Software Engineer`, `Mentor`, `Musician`]}
    />
  )
}
