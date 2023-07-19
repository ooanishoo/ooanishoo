import { SocialLinks } from '@/components/SocialLinks'
import {
  GITHUB_URL,
  LINKEDIN_URL,
  POLYWORK_URL,
  TWITTER_URL,
} from '@/constants'
import { render, screen } from '@testing-library/react'

describe('<SocialLinks />', () => {
  beforeEach(() => {
    render(<SocialLinks />)
  })
  describe('renders social icons with correct external links', () => {
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
