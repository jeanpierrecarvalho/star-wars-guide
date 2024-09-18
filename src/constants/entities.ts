interface IImage {
  src: string
  alt: string
}

interface IEntityType {
  [key: string]: {
    entity: string
    toFetch: string
    attributes: string[]
    img: IImage
  }
}

export const ENTITY_TYPE: IEntityType = {
  characters: {
    entity: 'characters',
    toFetch: 'people',
    attributes: ['name', 'height', 'mass', 'birth_year', 'gender'],
    img: {
      src: '/images/characters.png',
      alt: 'Main characters from the Star Wars movie series',
    },
  },
  planets: {
    entity: 'planets',
    toFetch: 'planets',
    attributes: ['name', 'climate', 'diameter', 'population', 'terrain'],
    img: {
      src: '/images/planets.png',
      alt: 'Planets in the Star Wars universe, including Tatooine and Endor',
    },
  },
  films: {
    entity: 'films',
    toFetch: 'films',
    attributes: ['title', 'episode_id', 'director', 'producer', 'release_date'],
    img: {
      src: '/images/films.png',
      alt: 'Film posters of all Star Wars movies',
    },
  },
  species: {
    entity: 'species',
    toFetch: 'species',
    attributes: ['name', 'language', 'designation', 'classification', 'average_lifespan'],
    img: {
      src: '/images/species.png',
      alt: 'Different species from Star Wars such as Wookiees and Twileks',
    },
  },
  starships: {
    entity: 'starships',
    toFetch: 'starships',
    attributes: ['name', 'model', 'passengers', 'starship_class'],
    img: {
      src: '/images/starships.png',
      alt: 'Various starships from the Star Wars universe including the Millennium Falcon',
    },
  },
  vehicles: {
    entity: 'vehicles',
    toFetch: 'vehicles',
    attributes: ['name', 'model', 'crew', 'manufacturer'],
    img: {
      src: '/images/vehicles.png',
      alt: 'Famous vehicles in Star Wars such as the AT-AT Walker and TIE Fighter',
    },
  },
}
