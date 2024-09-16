'use client';

import PageTitle from '@/components/Page/PageTitle';
import { useParams } from 'next/navigation';

export default function Page() {
	const params = useParams<{ type: string }>();

	return (
		<div>
			<PageTitle title={params.type} />
		</div>
	);
}
