import React, { useState, useEffect } from 'react';
import { fetchEntity } from '@/services/star-wars-api';
import { ENTITY_TYPE } from '@/constants/entities';

interface IProps {
	type: string;
}

interface IEntity {
	[key: string]: any;
}

const Table: React.FC<IProps> = ({ type }: IProps) => {
	const [data, setData] = useState<IEntity[]>([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			const response = await fetchEntity(
				ENTITY_TYPE[type].toFetch,
				1,
				''
			);
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
						{ENTITY_TYPE[type]?.attributes.map(
							(attribute, index) => (
								<th key={index}>{attribute}</th>
							)
						)}
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.name}>
							{ENTITY_TYPE[type]?.attributes.map(
								(attribute: string, index: number) => (
									<td
										className={`p-2 border-b ${
											index === 0 && 'w-64'
										}`}
										key={index}
									>
										{row[attribute]}
									</td>
								)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
