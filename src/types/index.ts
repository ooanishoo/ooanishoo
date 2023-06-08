type Status = 'VISIBLE' | 'HIDDEN' | 'PENDING'
export interface ITestimonial {
  author: IAuthor
  feedback: string
  date: string
  status?: Status
}

interface IAuthor {
  avatar: string
  name: string
  title?: string
  company?: string
  linkedInUrl: string
}
