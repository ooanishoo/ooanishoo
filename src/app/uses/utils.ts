import fs from 'fs'

export const getMarkdownContent = (path: string): string => {
  try {
    const fileContent = fs.readFileSync(path, 'utf8')
    return fileContent
  } catch (error) {
    throw error
  }
}
