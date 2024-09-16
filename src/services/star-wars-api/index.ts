import axios from 'axios';

import { API_BASE_URL } from '@/constants/api';

import { ICharacter } from '@/types/schema';

export interface IAPIResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: ICharacter[];
}

export const fetchEntity = async (
	type: string,
	page: number = 1,
	searchTerm: string = ''
): Promise<IAPIResponse> => {
	const response = await axios.get<IAPIResponse>(`${API_BASE_URL}/${type}`, {
		params: { page, searchTerm }
	});
	return response.data;
};
