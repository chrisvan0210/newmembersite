import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import FontIcon from '@/components/FontIcon';
import { SLIDER_SETTINGS } from '@/constants/sliders';
import type { GameDisplayData } from '@/types/app';

import CustomButton from '../CustomButton';
import styles from './index.module.scss';

interface SideWidgetSliderProps {
	visible: boolean;
	setVisible: (show: boolean) => void;
	content: GameDisplayData;
	isFromAPI?: boolean;
}

const SideWidgetSlider = ({ content, visible, setVisible, isFromAPI }: SideWidgetSliderProps) => {
	const t = useTranslations();
	const [localVisibility, setLocalVisibility] = useState(visible);
	const [slideBack, setSlideBack] = useState(false);
	const [slider, setSlider] = useState({ slickPrev: () => {}, slickNext: () => {} });
	const sliderImages = content.infoImages;

	const sliderSettings: Settings = {
		...SLIDER_SETTINGS,
		// eslint-disable-next-line react/no-unstable-nested-components
		customPaging(i: number) {
			return (
				<Image src={sliderImages[i]} width={100} height={80} alt={`Slide ${i + 1}`} className={styles.slick__image} />
			);
		},
		fade: true,
		dots: true,
		speed: 500,
		dotsClass: `${styles.slick}`,
	};

	const handleOnClick = () => {
		setSlideBack(prev => !prev);
		setTimeout(() => {
			setLocalVisibility(!localVisibility);
			setVisible(!localVisibility);
		}, 400);
	};

	const renderArrows = () => {
		return (
			<div className={styles.arrowContainer}>
				<div onClick={slider.slickPrev}>
					<FontIcon name="arrow_left" size={36} className={styles.arrowContainer__arrow} />
				</div>

				<div onClick={slider?.slickNext}>
					<FontIcon name="arrow_right" size={36} className={styles.arrowContainer__arrow} />
				</div>
			</div>
		);
	};

	return (
		<>
			<div
				className={classNames(styles.widgetContainer, { [styles['widgetContainer--show']]: visible })}
				onClick={handleOnClick}
			/>
			<div
				className={classNames(styles.sideWidget, {
					[styles['sideWidget--show']]: visible,
					[styles['sideWidget--offRight']]: slideBack,
				})}
			>
				<div className={styles.sideWidget__close}>
					<span className={styles.sideWidget__linkClose} onClick={handleOnClick}>
						x
					</span>
				</div>
				<div className={styles.sideWidget__content}>
					<div className={styles.sideWidget__sliderWrapper}>
						<div>
							{renderArrows()}
							<Slider ref={(slickProps: Slider) => setSlider(slickProps)} {...sliderSettings}>
								<Image src={sliderImages[0]} width={500} height={300} alt="Slide 1" />
								{sliderImages[1] && <Image src={sliderImages[1]} width={500} height={300} alt="Slide 2" />}
								{sliderImages[2] && <Image src={sliderImages[2]} width={500} height={300} alt="Slide 3" />}
								{sliderImages[3] && <Image src={sliderImages[3]} width={500} height={300} alt="Slide 4" />}
								{sliderImages[4] && <Image src={sliderImages[4]} width={500} height={300} alt="Slide 5" />}
								{sliderImages[5] && <Image src={sliderImages[5]} width={500} height={300} alt="Slide 6" />}
							</Slider>
						</div>
					</div>
					<div className={styles.sideWidget__text}>
						<h3 className={styles.sideWidget__title}>{!isFromAPI ? t(content.title) : content.title}</h3>
						<div className={styles.sideWidget__context}>
							{!isFromAPI ? t(content.description) : content.description}
						</div>
						<div className={styles.sideWidget__buttonContainer}>
							<Link href={content.playLink}>
								<CustomButton
									variant="yellowTransparent"
									text={t('common.play_now')}
									className={styles.sideWidget__button}
								/>
							</Link>
							{!!content.tryLink && (
								<Link href={content.tryLink}>
									<CustomButton
										variant="greenTransparent"
										text={t('common.play_for_fun')}
										className={styles.sideWidget__button}
									/>
								</Link>
							)}
							{!!content.rulesLink && (
								<Link href={content.rulesLink} className={styles.rulesLink} target="_blank">
									{t('common.game_rules')}
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideWidgetSlider;
