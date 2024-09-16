import { vi, describe, it, expect, MockInstance } from 'vitest';
import axios from 'axios';
import { fetchEntity } from '@/services/star-wars-api';

import { API_BASE_URL } from '@/constants/api';

import { mockedResponse } from './index.mock';

vi.mock('axios');

describe('fetchEntities', () => {
	it('should fetch characters successfully', async () => {
		(axios.get as unknown as MockInstance).mockResolvedValue({
			data: mockedResponse
		});

		const page = 1;
		const searchTerm = '';

		const result = await fetchEntity('people', page, searchTerm);

		expect(result).toEqual(mockedResponse);
		expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}/people`, {
			params: { page: 1, searchTerm: '' }
		});
	});

	it('should handle errors properly', async () => {
		(axios.get as unknown as MockInstance).mockRejectedValue(
			new Error('API Error')
		);

		await expect(fetchEntity('people', 1, '')).rejects.toThrow('API Error');
	});
});
