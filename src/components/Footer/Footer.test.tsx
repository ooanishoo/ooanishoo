import {
  GITHUB_URL,
  LINKEDIN_URL,
  POLYWORK_URL,
  TWITTER_URL,
} from '@/constants'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('<Footer />', () => {
  let footer: HTMLElement

  beforeEach(() => {
    render(<Footer />)
    footer = screen.getByRole('contentinfo')
  })
  it('renders footer tag element', () => {
    expect(footer).toBeInTheDocument()
  })

  it('copywrites the current year and author name', () => {
    const copywrite = screen.getByText(
      `© Anish Maharjan ${new Date().getFullYear()}`
    )
    expect(copywrite).toBeInTheDocument()
  })
  it('renders toggle theme button', () => {
    const toggleThemeButton = screen.getByRole('button', {
      name: /^switch to light mode/i,
    })
    expect(toggleThemeButton).toBeInTheDocument()
  })
  describe('renders social icon links', () => {
    describe.each`
      name          | url
      ${'Github'}   | ${GITHUB_URL}
      ${'LinkedIn'} | ${LINKEDIN_URL}
      ${'Polywork'} | ${POLYWORK_URL}
      ${'Twitter'}  | ${TWITTER_URL}
    `('$name', ({ name, url, icons }) => {
      it(`should render ${name} social icon`, () => {
        const socialIcon = screen.getByTitle(name)
        expect(socialIcon).toBeInTheDocument()
      })
      it(`should have correct external link: ${url}`, async () => {
        const socialLink = screen.getByRole('link', { name })

        expect(socialLink).toHaveAttribute('href', url)
        expect(socialLink).toHaveAttribute('target', '_blank')
      })
    })
  })
})
