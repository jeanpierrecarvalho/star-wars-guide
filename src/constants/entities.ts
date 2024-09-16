interface IEntitytype {
	[key: string]: {
		entity: string;
		toFetch: string;
		attributes: string[];
	};
}

export const ENTITY_TYPE: IEntitytype = {
	characters: {
		entity: 'characters',
		toFetch: 'people',
		attributes: ['name', 'height', 'mass', 'birth_year', 'gender']
	},
	planets: {
		entity: 'planets',
		toFetch: 'planets',
		attributes: []
	},
	films: {
		entity: 'films',
		toFetch: 'films',
		attributes: []
	},
	species: {
		entity: 'species',
		toFetch: 'species',
		attributes: []
	},
	starships: {
		entity: 'starships',
		toFetch: 'starships',
		attributes: []
	},
	vehicles: {
		entity: 'vehicles',
		toFetch: 'vehicles',
		attributes: []
	}
};
