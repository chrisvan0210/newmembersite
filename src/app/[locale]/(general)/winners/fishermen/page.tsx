'use client';

import { head } from 'lodash-es';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import type { Option } from '@/components/DropDownMenu';
import DropDownMenu from '@/components/DropDownMenu';
import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';
import Table from './Table';

const Winners = () => {
	const t = useTranslations();
	const locale = useLocale();

	const [weeksArray, setWeekArray] = useState<Option[]>([]);
	const [week, setWeek] = useState<Option>();

	const onSetWeekArray = (weeks: Option[]): void => {
		setWeekArray(weeks);
		setWeek(head(weeks));
	};

	const selectWeek = (value: Option) => {
		setWeek(value);
	};

	return (
		<div className="pageContainer">
			<div className={styles.container}>
				<div className={styles.pageName}>
					<p>{t('winners.page_title')}</p>
				</div>
				<div className={styles.pageTitle}>
					{locale === Locale.CN ? (
						<Image
							src={images.fishermen_gold_cn}
							alt=""
							width={380}
							height={172}
							className={styles.pageTitle__cnImage}
						/>
					) : (
						<Image src={images.fishermen_gold} alt="" width={447} height={181} className={styles.pageTitle__image} />
					)}
				</div>
				<div className={styles.tableContainer}>
					<span className={styles.tableContainer__flareLeft} />
					<span className={styles.tableContainer__flareRight} />
					<div className={styles.tableContainer__header}>
						<h2>{week?.value}</h2>
						<div className={styles.dropDown}>
							{weeksArray.length > 0 && (
								<DropDownMenu
									translate={false}
									options={weeksArray}
									onSelect={selectWeek}
									defaultValue={weeksArray[0]}
									itemClass={styles.dropDown__item}
									selectedItemClass={styles.dropDown__selected}
									optionsClass={styles.dropDown__options}
								/>
							)}
						</div>
					</div>
					<Table pageNumber={week?.id} selectWeek={onSetWeekArray} />
				</div>
			</div>
		</div>
	);
};

export default Winners;
