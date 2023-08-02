'use-client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import { SLIDER_SETTINGS } from '@/constants/sliders';
import useWindowWidth from '@/hooks/useWindowWidth';
import type { SliderData } from '@/types/app';

import CustomButton from '../CustomButton';
import styles from './index.module.scss';

interface SliderProps {
	slides: Array<SliderData>;
	bgColor?: string;
	buttonSolid?: boolean;
	noButton?: boolean;
	insetShadow?: string;
	useNewBanners?: boolean;
}

// TODO
// Simplify when all banners use new format
// Add support for slider animated content for games and slots
// Add support for different slide order per locale

const carouselSettings: Settings = {
	...SLIDER_SETTINGS,
	customPaging(i: number) {
		return <button key={i} aria-label="slider=controller" />;
	},
	dots: true,
	dotsClass: `${styles.slick}`,
};

function MainSlider(props: SliderProps) {
	const { slides, bgColor = 'var(--color-supernova)', buttonSolid, noButton, insetShadow, useNewBanners } = props;
	const t = useTranslations();
	const locale = useLocale();
	const width = useWindowWidth();
	const sliderBreakpoint = useNewBanners ? 1240 : 767;

	return (
		<div className={classNames(styles.slider, { backgroundColor: bgColor })}>
			{width > sliderBreakpoint ? (
				<Slider {...carouselSettings}>
					{slides.map(slide => (
						<div key={slide.title}>
							<div
								style={{
									background: `${bgColor} url(${
										useNewBanners ? `${slide.webBg}-${locale}.webp` : slide.webBg
									}) center no-repeat`,
									...(insetShadow && { boxShadow: `0 0 8px ${insetShadow} ${bgColor} inset` }),
								}}
							>
								<div className={styles.slider__contentBlock}>
									<div
										className={classNames(styles.slider__content, {
											[styles['slider__content--center']]: slide.textPosition === 'center',
											[styles['slider__content--left']]: slide.textPosition === 'left',
										})}
									>
										<div className={styles.slider__textContainer}>
											{slide.webText !== '' && (
												<img src={slide.webText} alt={slide.title} className={styles.slider__text} />
											)}
										</div>
										{!noButton && (
											<div className={styles.slider__button}>
												<Link href={`/${locale}${slide.btnLink}`}>
													<CustomButton
														large
														variant="greenTransparent"
														text={t(`slider.${slide.btnLabel}`)}
														className={classNames({
															[styles['slider__button--solid']]: buttonSolid,
															[styles['slider__button--offsetX']]: useNewBanners && slide.textPosition !== 'center',
														})}
													/>
												</Link>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			) : (
				<Slider {...carouselSettings}>
					{slides.map(slide => (
						<div key={slide.title}>
							<div
								key={slide.title}
								style={{ background: `url(${slide.mobile}) top center no-repeat` }}
								className={styles.slider__background}
							>
								<div className={styles.slider__contentBlock}>
									<div className={styles.slider__titleOverlay} />
									<span className={styles.slider__title}>
										{useNewBanners ? t(`slider.${slide.title}`) : slide.title}
									</span>
								</div>
							</div>
						</div>
					))}
				</Slider>
			)}
		</div>
	);
}

export default MainSlider;
