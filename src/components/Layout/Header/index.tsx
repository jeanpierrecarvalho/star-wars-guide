import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<React.Fragment>
			<div className='flex flex-row justify-center'>
				<Link href={'/'}>
					<Image
						src={'/images/logo.png'}
						width={200}
						height={200}
						alt={'Logo Star Wars'}
					/>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Header;
