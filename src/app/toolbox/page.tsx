import Markdown from 'markdown-to-jsx'
import { getMarkdownContent } from '../helpers'

export default function ToolBox() {
  const content = getMarkdownContent('toolbox/tech.md')

  return (
    <article className="prose md:prose-lg lg:prose-xl prose-headings:text-4xl prose-headings:font-normal dark:prose-invert ">
      <Markdown>{content}</Markdown>
    </article>
  )
}
