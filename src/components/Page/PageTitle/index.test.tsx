import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import PageTitle from '@/components/Page/PageTitle'

describe('PageTitle Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<PageTitle title={'Example'} />)
    expect(container).toMatchSnapshot()
  })
})
