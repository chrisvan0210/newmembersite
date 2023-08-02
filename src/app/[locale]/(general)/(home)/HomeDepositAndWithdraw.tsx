import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import CustomButton from '@/components/CustomButton';
import useScrollPosition from '@/hooks/useScrollPosition';

import styles from './HomeDepositAndWithdraw.module.scss';

const ProgressBar = ({ progress }: { progress: number }) => {
	const [progressWidth, setProgressWidth] = useState(0);
	const isReached = useScrollPosition(200);

	useEffect(() => {
		if (isReached) {
			setProgressWidth(progress);
		} else {
			setProgressWidth(0);
		}
	}, [isReached]);

	return (
		<div className={styles.progressBar}>
			<div className={styles.progressBar__bar} style={{ width: `${progressWidth}%` }} />
		</div>
	);
};

const HomeDepositAndWithdraw = () => {
	const t = useTranslations();
	const lang = useLocale();

	return (
		<div className={styles.homeDepositAndWithdraw}>
			<div className={styles.homeDepositAndWithdraw__deposit}>
				<div className={styles.homeDepositAndWithdraw__depositTitle}>
					<span>{t('common.deposit')}</span>
					<span>
						2 {t('common.min')} 1 {t('common.sec')}
					</span>
				</div>
				<ProgressBar progress={40} />
			</div>
			<div className={styles.homeDepositAndWithdraw__withdraw}>
				<div className={styles.homeDepositAndWithdraw__withdrawTitle}>
					<span>{t('common.withdrawal')}</span>
					<span>
						5 {t('common.min')} 39 {t('common.sec')}
					</span>
				</div>
				<ProgressBar progress={85} />
			</div>
			<div className={styles.homeDepositAndWithdraw__moreDetails}>
				<Link href={`/${lang}/Payment`}>
					<CustomButton large variant="yellowTransparent" text={t('common.more_details')} />
				</Link>
			</div>
		</div>
	);
};

export default HomeDepositAndWithdraw;
