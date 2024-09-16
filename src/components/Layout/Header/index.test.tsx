import { render } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import Header from '@/components/Layout/Header';

vi.mock('next/image', () => ({
	_esModule: true,
	default: ({ src, alt }: { src: string; alt: string }) => {
		return <img src={src} alt={alt} />;
	}
}));

describe('Header Component', () => {
	it('matches the snapshot', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
