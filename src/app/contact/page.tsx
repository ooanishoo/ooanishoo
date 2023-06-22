'use client'
import { renderSocialLinks } from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <h2 className="pt-2 text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
        {`Let's connect!`}
      </h2>
      <p className=" mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400  sm:text-lg">
        {`If you're a kindred spirit who appreciates the beauty of both technology and music, I'd love to connect. We can chat about anything from our favorite coding languages, pro tips, your best workout routines or even share a few guitar chords.`}
      </p>

      <p className=" mb-8 mt-6 text-sm text-gray-800 dark:text-slate-400  sm:text-lg">
        {`Oh, and I must admit, I have a soft spot for nerdy jokes and references!`}
      </p>

      <p className="mb-8 mt-20 text-sm text-gray-800 dark:text-slate-400  sm:text-lg">
        Feel free to reach out to me on any of the platforms below and say
        hello!
      </p>
      <div className="flex space-x-6 text-slate-400 dark:text-slate-500">
        {renderSocialLinks()}
      </div>
    </div>
  )
}
