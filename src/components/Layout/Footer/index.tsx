import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<div className='border-yellow-500 mt-12 pt-8 border-t-4 text-center'>
			<p>
				Star Wars and all associated names and / or images are copyright{' '}
				<Link href={'https://www.lucasfilm.com/'} target='_blank'>
					<span className='font-bold'>Lucasfilm Ltd.</span>
				</Link>
			</p>
			<p className='mt-2 text-sm'>
				© {new Date().getFullYear()}{' '}
				<Link href={'https://jeanpierrecarvalho.pt/'} target='_blank'>
					<span className='font-bold'>Jean-Pierre Carvalho</span>
				</Link>
				. All Rights Reserved
			</p>
		</div>
	);
};

export default Footer;
