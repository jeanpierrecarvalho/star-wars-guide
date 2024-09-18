import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Footer from '@/components/Layout/Footer'

describe('Footer Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
