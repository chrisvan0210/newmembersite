import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';

function VirtualSports() {
	const t = useTranslations();
	const locale = useLocale();

	const virtualSports = [
		t('virtual_sports.description_1'),
		t('virtual_sports.description_2'),
		t('virtual_sports.description_3'),
		t('virtual_sports.description_4'),
	];

	return (
		<div className="pageContainer">
			<div className={styles.virtualSports}>
				<div className={styles.virtualSports__contentContainer}>
					<div className={styles.iconButton}>
						<FontIcon name="virtual_sports_2" size={36} />
					</div>
					<div className={styles.virtualSports__content}>
						<Image
							src={`${images.virtual_sports_7}-${locale}.png`}
							height={190}
							width={500}
							alt={t('header.virtual_sports')}
							className={styles.virtualSports__logo}
						/>
						<div className={styles.virtualSports__contentInfo}>
							<span className={styles.virtualSports__header}>{t('virtual_sports.page_header')}</span>
							<ul>
								{virtualSports.map(item => (
									<li key={item} className={styles.virtualSports__infoList}>
										{item}
									</li>
								))}
								{locale === Locale.VN && (
									<li className={styles.virtualSports__infoList}>{t('virtual_sports.description_5')}</li>
								)}
							</ul>
						</div>
						<Link href="/sportsbook/virtualsports" className={styles.virtualSports__link}>
							<CustomButton large text={t('slider.play_now')} className={styles.virtualSports__button} />
						</Link>
					</div>
					<Image
						src={images.virtual_sports_game}
						height={690}
						width={675}
						alt={t('header.virtual_sports')}
						className={styles.virtualSports__contentImage}
					/>
				</div>
			</div>
		</div>
	);
}

export default VirtualSports;
