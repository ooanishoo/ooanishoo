import { render, screen, waitFor } from '@testing-library/react'
import { ReactElement } from 'react'
import { BarGraph } from '@/components/BarGraph'

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts')

  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: ReactElement }) => (
      <OriginalModule.ResponsiveContainer width={800} height={400}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  }
})

describe('<BarGraph />', () => {
  const { ResizeObserver } = window
  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))

    render(<BarGraph />)
  })
  afterEach(() => {
    window.ResizeObserver = ResizeObserver
    jest.restoreAllMocks()
  })

  it('should render a bar graph', async () => {
    const barGraph = screen.queryByRole('graphics-document')
    expect(barGraph).toBeInTheDocument()
    const title = screen.getByTitle('How do I fill my time?')
    expect(title).toBeInTheDocument()
  })

  it('should render correct labels', () => {
    expect(screen.getByText('Coding')).toBeInTheDocument()
    expect(screen.getByText('Mentoring')).toBeInTheDocument()
    expect(screen.getByText('Lifting')).toBeInTheDocument()
    expect(screen.getByText('Guitar')).toBeInTheDocument()
    expect(screen.getByText('Keyboard')).toBeInTheDocument()
    expect(screen.getByText('DIY projects')).toBeInTheDocument()
  })

  it('should render 6 bars', async () => {
    /**
     * The Recharts bars are not immediately rendered
     * due to animations so we need to use waitFor() HOF
     * to wait a few seconds for the expect() assertions to pass.
     */
    await waitFor(() => {
      const bars = screen.getAllByRole('graphics-symbol')
      expect(bars).toHaveLength(6)
    })
  })

  it.each`
    index | name              | color
    ${0}  | ${'Coding'}       | ${'#3B82F6'}
    ${1}  | ${'Mentoring'}    | ${'#9ecae1'}
    ${2}  | ${'Lifting'}      | ${'#deebf7'}
    ${3}  | ${'Guitar'}       | ${'#3182bd'}
    ${4}  | ${'Keyboard'}     | ${'#9ecae1'}
    ${5}  | ${'DIY projects'} | ${'#deebf7'}
  `(
    `should render a bar: $name with background color: $color`,
    async ({ index, name, color }) => {
      await waitFor(() => {
        const bars = screen.getAllByRole('graphics-symbol')
        expect(bars[index].getAttribute('fill')).toBe(color)
        expect(bars[index].getAttribute('name')).toBe(name)
      })
    }
  )
})
