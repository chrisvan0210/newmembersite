'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import MainSlider from '@/components/MainSlider';
import { ESPORTS_CONTENT } from '@/constants/esports';
import { ESPORTS_SLIDER } from '@/constants/sliders';

import styles from './page.module.scss';

function Esports() {
	const t = useTranslations();
	return (
		<div className="pageContainer">
			<MainSlider slides={ESPORTS_SLIDER} bgColor="var(--color-bottle-green2)" buttonSolid insetShadow="16px" />
			<div className={styles.esportsContainer}>
				<div className={styles.esportsContent}>
					{ESPORTS_CONTENT.map(content => (
						<div key={content.title}>
							<Link href={content.link} className={styles.esportsContent__item}>
								<Image
									className={styles.esportsContent__image}
									src={content.image}
									alt={content.title}
									width={505}
									height={245}
								/>
								<span className={styles.esportsContent__title}>{t(`esports.${content.title}`)}</span>
								<p>{t(`esports.${content.description}`)}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Esports;
