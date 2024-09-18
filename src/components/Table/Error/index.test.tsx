import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Error from '@/components/Table/Error'

describe('Error Component', () => {
  it('matches the snapshot', () => {
    const props = {
      error: 'Lorem Ipsum',
    }

    const { container } = render(<Error {...props} />)
    expect(container).toMatchSnapshot()
  })
})
