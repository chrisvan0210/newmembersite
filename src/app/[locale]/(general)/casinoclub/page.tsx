'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { CASINO_CLUB_SLIDER } from '@/constants/casino';
import { CLUB_SELECT } from '@/constants/casinoGames';
import { SLIDER_SETTINGS } from '@/constants/sliders';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';

const paging = (i: number) => {
	const label: Array<string> = ['A', 'K', 'Q', 'J', '10', '9', '8'];
	return <button key={i}>{label[i]}</button>;
};

function CasinoClub() {
	const t = useTranslations();
	const locale = useLocale();
	const [imageLocale, setImageLocale] = useState(locale);
	const [activeSlide, setActiveSlide] = useState(0);

	const sliderSettings: Settings = {
		...SLIDER_SETTINGS,
		customPaging: paging,
		dots: true,
		useCSS: false,
		pauseOnHover: false,
		dotsClass: `${styles.slick}`,
		beforeChange: (_, next: number) => {
			setActiveSlide(next);
		},
	};

	return (
		<div className="pageContainer">
			<div className={styles.casinoClubContainer}>
				<div className={styles.casinoClub}>
					<div className={styles.casinoClub__select}>
						{CLUB_SELECT.slice(1).map(item => (
							<Link key={item.options.label} href={item.link} target="_blank">
								<button className={styles.casinoClub__selectButtons}>{t(item.options.label)}</button>
							</Link>
						))}
					</div>
					<Slider {...sliderSettings}>
						{CASINO_CLUB_SLIDER.map((slide, i) => (
							<div key={slide.header}>
								<div
									className={classNames(styles.contentBlock, { [styles['contentBlock--disabled']]: slide.disabled })}
								>
									<div
										className={classNames(styles.contentBlock__left, {
											[styles['contentBlock__left--animate']]: activeSlide === i,
										})}
									>
										<Image
											src={slide.front}
											alt={slide.front}
											width={680}
											height={740}
											className={classNames(styles.contentBlock__frontImage, {
												[styles['contentBlock__frontImage--offsetX']]: i === 6,
											})}
										/>
										{slide.back && (
											<Image
												src={slide.back}
												width={660}
												height={690}
												alt={slide.back}
												className={styles.contentBlock__backImage}
											/>
										)}
									</div>
									<div
										className={classNames(styles.contentBlock__right, {
											[styles['contentBlock__right--animate']]: activeSlide === i,
										})}
									>
										<Image
											src={`${slide.header}-${imageLocale}.png`}
											width={455}
											height={120}
											alt={slide.header}
											className={styles.contentBlock__header}
											onError={() => {
												setImageLocale(Locale.EN);
											}}
										/>
										<p className={styles.contentBlock__description}>{t(`casino.${slide.description}`)}</p>
										<div className={styles.contentBlock__gamesContainer}>
											{slide.games?.map(game => (
												<Link href={slide.button2_link} key={game} className={styles.contentBlock__games}>
													<FontIcon name={game} size={42} />
													<span className={styles.contentBlock__gamesLabel}>{t(`casino.${game}`)}</span>
												</Link>
											))}
										</div>
										<div className={styles.contentBlock__buttons}>
											<Link
												href={slide.button1_link}
												className={classNames({ [styles['link--disabled']]: slide.disabled })}
											>
												<CustomButton large text={t('slider.play_now')} className={styles.contentBlock__greenButton} />
											</Link>
											<Link
												href={slide.button2_link}
												className={classNames({ [styles['link--disabled']]: slide.disabled })}
											>
												<CustomButton
													large
													text={t('slider.more_info')}
													className={styles.contentBlock__yellowButton}
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default CasinoClub;
