import React, { useState, useEffect } from 'react';
import { fetchEntity } from '@/services/star-wars-api';
import { ICharacter } from '@/types/schema';

interface IProps {
	type: string;
}

const Table: React.FC<IProps> = ({ type }: IProps) => {
	const [data, setData] = useState<ICharacter[]>([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			const response = await fetchEntity(type, 1, '');
			setData(response.results);
		} catch (err) {
			throw new Error('Failed to load data. Please ty again later.');
		}
	};

	return (
		<div className='mt-8'>
			<table className='border-collapse w-full text-left table-auto'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Birth Year</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.name}>
							<td className='p-2 border-b w-64'>{item.name}</td>
							<td className='p-2 border-b'>{item.height}</td>
							<td className='p-2 border-b'>{item.mass}</td>
							<td className='p-2 border-b'>{item.birth_year}</td>
							<td className='p-2 border-b'>{item.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
