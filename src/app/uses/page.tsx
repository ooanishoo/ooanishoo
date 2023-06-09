import Markdown from 'markdown-to-jsx'
import { getMarkdownContent } from '../helpers'

export default function ToolBox() {
  const content = getMarkdownContent('docs/uses.md')

  return (
    <article className="prose prose-sm mx-auto dark:prose-invert sm:container md:prose-base prose-h1:text-2xl prose-h2:text-xl prose-a:no-underline hover:prose-a:text-sky-500 dark:hover:prose-a:text-sky-400 sm:prose-h1:text-3xl lg:prose-h1:text-4xl">
      <Markdown>{content}</Markdown>
    </article>
  )
}
