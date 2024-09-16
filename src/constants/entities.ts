interface IImage {
	src: string;
	alt: string;
}

interface IEntitytype {
	[key: string]: {
		entity: string;
		toFetch: string;
		attributes: string[];
		img: IImage;
	};
}

export const ENTITY_TYPE: IEntitytype = {
	characters: {
		entity: 'characters',
		toFetch: 'people',
		attributes: ['name', 'height', 'mass', 'birth_year', 'gender'],
		img: {
			src: '/images/characters.jpeg',
			alt: 'Characters Image'
		}
	},
	planets: {
		entity: 'planets',
		toFetch: 'planets',
		attributes: ['name', 'climate', 'diameter', 'population', 'terrain'],
		img: {
			src: '/images/characters.jpeg',
			alt: 'Planets Image'
		}
	},
	films: {
		entity: 'films',
		toFetch: 'films',
		attributes: [
			'title',
			'episode_id',
			'director',
			'producer',
			'release_date'
		],
		img: {
			src: '/images/characters.jpeg',
			alt: 'Films Image'
		}
	},
	species: {
		entity: 'species',
		toFetch: 'species',
		attributes: [
			'name',
			'language',
			'designation',
			'classification',
			'average_lifespan'
		],
		img: {
			src: '/images/characters.jpeg',
			alt: 'Species Image'
		}
	},
	starships: {
		entity: 'starships',
		toFetch: 'starships',
		attributes: ['name', 'model', 'passengers', 'starship_class'],
		img: {
			src: '/images/characters.jpeg',
			alt: 'Starships Image'
		}
	},
	vehicles: {
		entity: 'vehicles',
		toFetch: 'vehicles',
		attributes: ['name', 'model', 'crew', 'manufacturer'],
		img: {
			src: '/images/characters.jpeg',
			alt: 'VEhicles Image'
		}
	}
};
