import { slice } from 'lodash-es';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import type { Option } from '@/components/DropDownMenu';
import amountFormat from '@/utils/amount-format';
import type { FishermenTableHeader } from '@/utils/winners';
import makeGroupData from '@/utils/winners';

import styles from './page.module.scss';

interface WinnersTableType {
	pageNumber: number | undefined;
	selectWeek: (weekArray: Option[]) => void;
}

function Table({ pageNumber = 0, selectWeek }: WinnersTableType) {
	const t = useTranslations();
	const [tableBody, setTableBody] = useState<FishermenTableHeader[][]>([]);
	const [tableHeader, setTableHeader] = useState<FishermenTableHeader | null>(null);

	useEffect(() => {
		fetch('/api/get-excel/winners.xlsx', {
			method: 'GET',
		})
			.then(async response => {
				const res = (await response.json()) as FishermenTableHeader[];
				const groupData = makeGroupData(res, 'ranking_week');

				setTableHeader(groupData[0][1]);
				// Group weekly Options
				const groups1: FishermenTableHeader[] = [];
				groupData.map(item => {
					return groups1.push(item[0]);
				});

				// Change object keywords
				const weeklyArray: Option[] = groups1.map((item, index) => ({
					id: index,
					label: t(`winners.${item.title.trim().substring(0, 12)}`, { weekNumber: index + 1 }),
					value: item.winners.trim(),
				}));

				selectWeek(weeklyArray);
				// Get the body contents for table
				const groups2: FishermenTableHeader[][] = [];
				groupData.map(item => {
					const newArray = slice(item, 2);
					return groups2.push(newArray);
				});
				setTableBody(groups2);
			})
			.catch(error => {
				console.error('Error fetching Excel file:', error);
			});
	}, []);
	if (!tableBody || !tableHeader) return null;

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th scope="col">{t(`winners.${tableHeader.title}`)}</th>
					<th scope="col">{t(`winners.${tableHeader.winners}`)}</th>
					<th scope="col">{t(`winners.${tableHeader.amount}`)}</th>
					<th scope="col">{t(`winners.${tableHeader.bonus}`)}</th>
				</tr>
			</thead>
			<tbody>
				{tableBody[pageNumber]?.map(b => {
					return (
						<tr key={b.title}>
							<td data-label={t(`winners.title`)}>{t(`winners.${b.title}`)}</td>
							<td data-label={t(`winners.winners`)}>{b.winners}</td>
							<td data-label={t(`winners.total_eligible_amount`)}>{amountFormat(b.amount, 0)}</td>
							<td data-label={t(`winners.bonus`)}>{b.bonus}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
