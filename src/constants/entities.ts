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
		attributes: ['name', 'climate', 'diameter', 'population', 'terrain']
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
		]
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
		]
	},
	starships: {
		entity: 'starships',
		toFetch: 'starships',
		attributes: ['name', 'model', 'passengers', 'starship_class']
	},
	vehicles: {
		entity: 'vehicles',
		toFetch: 'vehicles',
		attributes: ['name', 'model', 'crew', 'manufacturer']
	}
};
