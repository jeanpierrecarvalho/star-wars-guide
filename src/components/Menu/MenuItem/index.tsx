import Image from 'next/image';
import Link from 'next/link';

interface IProps {
	href: string;
	imageSrc: string;
	imageAlt: string;
	title: string;
}

const MenuItem = ({ href, imageSrc, imageAlt, title }: IProps) => {
	return (
		<Link href={href} className='mb-12'>
			<div className=''>
				<div className='flex flex-row justify-center'>
					<Image
						src={imageSrc}
						width={300}
						height={300}
						alt={imageAlt}
					/>
				</div>
				<div className='flex flex-row justify-center mt-4'>
					<span className='font-starjout text-4xl text-center text-yellow-500'>
						{title}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default MenuItem;
