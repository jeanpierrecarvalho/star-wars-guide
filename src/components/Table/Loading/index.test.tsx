import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Loading from '@/components/Table/Loading'

describe('Loading Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })
})
