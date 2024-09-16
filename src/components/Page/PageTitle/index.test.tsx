import { render } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import PageTitle from '@/components/Page/PageTitle';

vi.mock('next/image', () => ({
	_esModule: true,
	default: ({ src, alt }: { src: string; alt: string }) => {
		return <img src={src} alt={alt} />;
	}
}));

describe('PageTitle Component', () => {
	it('matches the snapshot', () => {
		const { container } = render(<PageTitle title={'Example'} />);
		expect(container).toMatchSnapshot();
	});
});
