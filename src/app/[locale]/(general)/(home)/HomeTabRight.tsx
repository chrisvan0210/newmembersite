import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import CustomButton from '@/components/CustomButton';
import { BONUS_OPTIONS } from '@/constants/home';

import HomeDepositAndWithdraw from './HomeDepositAndWithdraw';
import styles from './HomeTabRight.module.scss';

const HomeTabRight = () => {
	const t = useTranslations();
	return (
		<div className={styles.homeTabRight}>
			<HomeDepositAndWithdraw />
			<div className={styles.bonusOptions}>
				{BONUS_OPTIONS.map(item => (
					<div key={item.image} className={styles.bonusOptions__container}>
						<Image
							src={item.image}
							alt={t(`common.${item.label}`)}
							width={430}
							height={195}
							className={styles.bonusOptions__image}
						/>
						<div className={styles.bonusOptions__mask}>
							<Link href={item.link} target="_blank" className={styles.bonusOptions__link}>
								<CustomButton
									large
									variant="yellowTransparent"
									text={t('common.more_details')}
									className={styles.bonusOptions__button}
								/>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeTabRight;
