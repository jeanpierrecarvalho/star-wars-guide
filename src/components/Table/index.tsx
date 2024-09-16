import React, { useState, useEffect } from 'react';
import { fetchEntity } from '@/services/star-wars-api';
import { ENTITY_TYPE } from '@/constants/entities';
import Pagination from './Pagination';

interface IProps {
	type: string;
}

interface IEntity {
	[key: string]: any;
}

const Table: React.FC<IProps> = ({ type }: IProps) => {
	const [data, setData] = useState<IEntity[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);

	useEffect(() => {
		loadData();
	}, [page]);

	const loadData = async () => {
		try {
			const response = await fetchEntity(
				ENTITY_TYPE[type].toFetch,
				page,
				''
			);
			setData(response.results);
			setTotalPages(Math.ceil(response.count / 10));
		} catch (err) {
			throw new Error('Failed to load data. Please ty again later.');
		}
	};

	const handlePageChange = (newPage: number) => {
		if (newPage > 0 && newPage <= totalPages) {
			setPage(newPage);
		}
	};

	return (
		<div className='mt-8'>
			<table className='border-collapse w-full text-left table-auto'>
				<thead>
					<tr>
						{ENTITY_TYPE[type]?.attributes.map(
							(attribute, index) => (
								<th key={index} className='px-6'>
									{attribute.charAt(0).toUpperCase() +
										attribute.slice(1)}
								</th>
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
										className={`px-6 py-2 border-b ${
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
			<div className='mt-12 px-6'>
				<Pagination
					page={page}
					totalPages={totalPages}
					handlePageChange={handlePageChange}
					loading={false}
				/>
			</div>
		</div>
	);
};

export default Table;
