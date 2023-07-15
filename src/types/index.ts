type Status = 'VISIBLE' | 'HIDDEN'
type Relationship = 'COLLEAGUE' | 'MENTEE'
export interface ITestimonial {
  author: IAuthor
  feedback: string
  date?: string
  status?: Status
  relationship: Relationship
}

interface IAuthor {
  avatar: string
  name: string
  title?: string
  company?: string
  linkedInUrl: string
}
