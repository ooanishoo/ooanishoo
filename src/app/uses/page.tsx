import Markdown from 'markdown-to-jsx'
import { getMarkdownContent } from '../helpers'

export default function ToolBox() {
  const content = getMarkdownContent('docs/uses.md')

  return (
    <article className="prose mx-auto dark:prose-invert md:prose-lg lg:container lg:prose-xl  prose-h1:text-2xl prose-h2:text-xl prose-a:no-underline">
      <Markdown>{content}</Markdown>
    </article>
  )
}
