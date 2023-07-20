import { render, screen, waitFor } from '@testing-library/react'
import { ToggleThemeButton } from '@/components/ToggleThemeButton'
import { ThemeProvider } from 'next-themes'
import userEvent from '@testing-library/user-event'

const WrappedToggleThemeButton = ({ defaultTheme = 'dark' }) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme} attribute="class">
      <ToggleThemeButton />
    </ThemeProvider>
  )
}

describe('<ToggleThemeButton />', () => {
  let button: HTMLButtonElement

  it('should render the toggle theme button', () => {
    render(<WrappedToggleThemeButton />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  describe('when the current theme is dark', () => {
    beforeEach(() => {
      render(<WrappedToggleThemeButton />)
      button = screen.getByRole('button')
    })
    it('should render a moon icon', () => {
      expect(screen.getByRole('img')).toBeInTheDocument()
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Moon icon')
    })

    it('should display a tooltip with the text "Switch to light mode" when hovered', async () => {
      expect(button).toHaveAttribute('title', 'Switch to light mode')
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
    })
    it('should change the theme to light when the toggle button is clicked', async () => {
      await userEvent.click(button)

      expect(button).toHaveAttribute('title', 'Switch to dark mode')
      expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
    })
  })
  describe('when the current theme is light', () => {
    beforeEach(() => {
      render(<WrappedToggleThemeButton defaultTheme="light" />)
      button = screen.getByRole('button')
    })
    it('should render a sun icon', () => {
      expect(screen.getByRole('img')).toBeInTheDocument()
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Sun icon')
    })
    it('should display a tooltip with the text "Switch to dark mode" when hovered', async () => {
      expect(button).toHaveAttribute('title', 'Switch to dark mode')
      expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
    })
    it('should change the theme to dark when the toggle button is clicked', async () => {
      await userEvent.click(button)

      expect(button).toHaveAttribute('title', 'Switch to light mode')
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
    })
  })
})
