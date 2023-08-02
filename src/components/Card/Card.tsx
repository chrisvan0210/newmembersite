'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import CustomButton from '@/components/CustomButton';
import type { GameDisplayData } from '@/types/app';

import styles from './index.module.scss';

interface CardType {
	image: string;
	label: string;
	more_info: GameDisplayData;
	playReal?: () => void;
	moreInfo?: (detail: GameDisplayData) => void;
}

const Card = ({ image, label, more_info, playReal, moreInfo }: CardType) => {
	const t = useTranslations();
	return (
		<div className={styles.item}>
			<Image src={image} alt="" fill sizes="100vw" className={styles.item__image} />
			<p className={styles.item__label}>{label}</p>
			<div className={styles.item__buttons}>
				{!!playReal && (
					<CustomButton small variant="yellowTransparentToYellow" text={t('common.play_real')} onClick={playReal} />
				)}
				{!!moreInfo && (
					<div className={styles.item__moreInfo} onClick={() => moreInfo(more_info)}>
						{t('common.more_info')}
					</div>
				)}
			</div>
		</div>
	);
};
export default Card;
