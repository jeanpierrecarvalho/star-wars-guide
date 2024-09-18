import axios from 'axios'

import { API_BASE_URL } from '@/constants/api'

import { ICharacter } from '@/types/schema'

export interface IAPIResponse {
  count: number
  next: string | null
  previous: string | null
  results: ICharacter[]
}

export const fetchEntity = async (
  type: string,
  page: number = 1,
  search: string = '',
): Promise<IAPIResponse> => {
  const response = await axios.get<IAPIResponse>(`${API_BASE_URL}/${type}`, {
    params: { page, search },
  })
  return response.data
}
