import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Table from '@/components/Table'
import { EntityProvider } from '@/providers/EntityProvider'

describe('Table Component', () => {
  it('matches the snapshot', () => {
    const props = {
      type: 'characters',
    }

    const { container } = render(
      <EntityProvider>
        <Table {...props} />
      </EntityProvider>,
    )
    expect(container).toMatchSnapshot()
  })
})
