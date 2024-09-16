import { ENTITY_TYPE } from '@/constants/entities';
import MenuItem from '@/components/Menu/MenuItem';

const Menu = () => {
	return (
		<div className='justify-center grid grid-cols-3 mt-8'>
			{Object.keys(ENTITY_TYPE).map((key) => (
				<MenuItem
					key={key}
					href={`/${ENTITY_TYPE[key].entity}`}
					imageSrc={ENTITY_TYPE[key].img.src}
					imageAlt={ENTITY_TYPE[key].img.alt}
					title={ENTITY_TYPE[key].entity}
				/>
			))}
		</div>
	);
};

export default Menu;
