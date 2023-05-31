import Markdown from 'markdown-to-jsx'
import { getMarkdownContent } from '../helpers'

export default function ToolBox() {
  const content = getMarkdownContent('docs/uses.md')

  return (
    <article className="prose md:prose-lg lg:prose-xl prose-h1:text-4xl prose-h2:text-3xl prose-headings:font-normal dark:prose-invert prose-a:no-underline max-w-screen-2xl">
      <Markdown>{content}</Markdown>
    </article>
  )
}
