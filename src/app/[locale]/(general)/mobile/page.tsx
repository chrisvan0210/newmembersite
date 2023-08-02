'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import MainSlider from '@/components/MainSlider';
import { MOBILE_CONTENT_HEADER, MOBILE_SECURITY, MOBILE_SLIDER } from '@/constants/mobile';

import Android from './Android';
import Html from './Html';
import Ios from './Ios';
import styles from './page.module.scss';

function Mobile() {
	const t = useTranslations();
	const [activeTab, setActiveTab] = useState(0);
	const [previousTab, setPreviousTab] = useState(0);

	const handleChangeTab = (i: number) => {
		setPreviousTab(activeTab);
		setTimeout(() => {
			setActiveTab(i);
		}, 10);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={MOBILE_SLIDER} bgColor="var(--color-bottle-green2)" buttonSolid insetShadow="32px" />
			<div className={styles.content}>
				<div className={styles.content__headerContainer}>
					{MOBILE_CONTENT_HEADER.map((header, i) => (
						<div
							key={header}
							className={classNames(styles.content__header, { [styles['content__header--active']]: activeTab === i })}
						>
							<Image
								src={header}
								alt={header}
								width={180}
								height={110}
								className={styles.content__headerImage}
								onClick={() => handleChangeTab(i)}
							/>
						</div>
					))}
				</div>
				<div className={styles.content__tabContentContainer}>
					<div className={styles.content__tabContent}>
						<div
							className={classNames(
								{ [styles['content__tabContent--slideLeft']]: activeTab > previousTab },
								{ [styles['content__tabContent--slideRight']]: activeTab < previousTab },
							)}
						>
							{activeTab === 0 && <Android />}
							{activeTab === 1 && <Html />}
							{activeTab === 2 && <Ios />}
						</div>
						<div className={styles.content__bottom}>
							{MOBILE_SECURITY.map(item => (
								<div key={item.label} className={styles.content__bottomItem}>
									<Image
										src={item.image}
										alt={item.label}
										width={110}
										height={110}
										className={styles.content__bottomImage}
									/>
									<span className={styles.content__bottomText}>{t(`common.${item.label}`)}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mobile;
