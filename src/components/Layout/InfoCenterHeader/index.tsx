'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

import styles from './index.module.scss';

function InfoCenterHeader() {
	const t = useTranslations();
	const locale = useLocale();
	const fb88Logo = locale === Locale.CN ? images.fb88_logo_cn : images.fb88_fair_games;

	return (
		<div className={styles.header}>
			<div className={styles.header__top}>
				<Link href="/">
					<Image src={fb88Logo} width={198} height={70} alt="FB88" />
				</Link>
			</div>
			<div className={styles.header__bottom}>{t('common.info_center')}</div>
		</div>
	);
}

export default InfoCenterHeader;
