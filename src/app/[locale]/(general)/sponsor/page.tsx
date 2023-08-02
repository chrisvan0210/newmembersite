'use client';

/* eslint-disable jsx-a11y/media-has-caption */

import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import MainSlider from '@/components/MainSlider';
import { images, videos } from '@/config/resources';
import { GAME_SLIDER, SPONSOR_MAIN_SLIDER, SPOTLIGHT_SLIDER, SUB_FOOTER_LOGOS } from '@/constants/sponsor';

import styles from './page.module.scss';

interface ArrowProps {
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	forGame?: boolean;
}
const PrevArrow: React.FC<ArrowProps> = ({ onClick, forGame }) => {
	const size = forGame ? 40 : 45;
	return (
		<Image
			alt="<"
			src={images.prev_arrow}
			width={size}
			height={size}
			onClick={onClick}
			className={classNames(styles.prevArrow, { [styles['prevArrow--games']]: forGame })}
		/>
	);
};

const NextArrow: React.FC<ArrowProps> = ({ onClick, forGame }) => {
	const size = forGame ? 40 : 45;
	return (
		<Image
			alt=">"
			src={images.next_arrow}
			width={size}
			height={size}
			onClick={onClick}
			className={classNames(styles.nextArrow, { [styles['nextArrow--games']]: forGame })}
		/>
	);
};

const spotlightSettings: Settings = {
	infinite: true,
	slidesToShow: 3,
	speed: 500,
	rows: 2,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const gameSettings: Settings = {
	...spotlightSettings,
	customPaging(i: number) {
		return <button key={i}>{i + 1}</button>;
	},
	nextArrow: <NextArrow forGame />,
	prevArrow: <PrevArrow forGame />,
	dots: true,
	slidesToShow: 4,
	dotsClass: `${styles.slick}`,
};

function Sponsor() {
	const t = useTranslations();

	const renderHeader = (title: string, highlight: string, center?: boolean) => {
		return (
			<div className={classNames(styles.header, { [styles['header--centered']]: center })}>
				{t(`sponsor.${title}`)} <span className={styles.header__highlight}>{t(`sponsor.${highlight}`)}</span>
			</div>
		);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={SPONSOR_MAIN_SLIDER} bgColor="var(--color-bottle-green2)" noButton />
			<div className={styles.announcement}>
				<div className={styles.announcement__title}>{t('sponsor.announcement')} :</div>
				<div className={styles.announcement__content}>
					<span className={styles.announcement__marquee}>{t('sponsor.announcement_details')}</span>
				</div>
			</div>
			<div className={styles.top}>
				<div className={styles.top__content}>
					<div>
						{renderHeader('the_next', 'big_step')}
						<p className={styles.top__details}>{t('sponsor.header_details')}</p>
					</div>
					<Image
						src={images.mainz_players}
						alt={t('sponsor.main_2020_21_bundesliga')}
						height={312}
						width={554}
						className={styles.top__image}
					/>
				</div>
			</div>
			<div className={styles.spotlight}>
				{renderHeader('spotlight', 'photos', true)}
				<Slider {...spotlightSettings} className={styles.spotlight__slider}>
					{SPOTLIGHT_SLIDER.map(slide => (
						<div key={slide.image} className={styles.slideImageContainer}>
							<Image
								src={slide.image}
								alt={slide.details}
								height={220}
								width={490}
								className={styles.spotlight__image}
							/>
							<span>{t(`sponsor.${slide.details}`)}</span>
						</div>
					))}
				</Slider>
			</div>
			<div className={styles.game}>
				{renderHeader('game', 'highlights')}
				<Slider {...gameSettings} className={styles.game__slider}>
					{GAME_SLIDER.map(slide => (
						<div key={slide} className={styles.slideImageContainer}>
							<Image src={slide} alt={slide} height={202} width={268} className={styles.game__image} />
						</div>
					))}
				</Slider>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottom__content}>
					<video
						controls
						preload="none"
						poster={images.mainz_video_poster}
						src={videos.mainz_fb88}
						className={styles.bottom__mainVideo}
					/>
					<div className={styles.bottom__otherVideoContainer}>
						<div className={styles.bottom__video}>
							<iframe title="Mainz 05" src={videos.home_of_mainz} className={styles.bottom__iframe} />
						</div>
						<video autoPlay muted loop controls src={videos.super_cup} className={styles.bottom__video} />
					</div>
					<p className={styles.bottom__details}>{t('sponsor.footer')}</p>
					<div className={styles.bottom__logosContainer}>
						{SUB_FOOTER_LOGOS.map(logo => (
							<Image
								key={logo.image}
								src={logo.image}
								alt={logo.label}
								width={logo.width}
								height={logo.height}
								className={styles.bottom__logo}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sponsor;
