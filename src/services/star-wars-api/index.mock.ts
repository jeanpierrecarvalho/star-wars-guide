import { IAPIResponse } from '@/services/star-wars-api'

export const mockedResponse: IAPIResponse = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      birth_year: '19BBY',
      gender: 'male',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',

      birth_year: '112BBY',
      gender: 'n/a',
    },
  ],
}
