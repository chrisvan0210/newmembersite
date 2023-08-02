import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import {
	COIN,
	HOT_PRODUCTS_LIST,
	HOT_PRODUCTS_SLIDER,
	SLIDER_SETTINGS,
	TOP_WINNERS_LIST,
	TOP_WINNERS_SLIDER,
} from '@/constants/sliders';
import type { ListSliderData } from '@/types/app';

import styles from './HomeSliders.module.scss';

const listSettings: Settings = {
	...SLIDER_SETTINGS,
	slidesToShow: 5,
	vertical: true,
};

function HomeSlider() {
	const locale = useLocale();
	const t = useTranslations();

	const renderCarousel = (slides: Array<string>) => {
		return (
			<Slider {...SLIDER_SETTINGS}>
				{slides.map(slide => (
					<div key={slide}>
						<img src={slide} alt={slide} className={styles.section__carouselImage} />
					</div>
				))}
			</Slider>
		);
	};

	const renderListSlider = (list: Array<ListSliderData>) => {
		return (
			<Slider {...listSettings}>
				{list.map(item => (
					<div key={item.name}>
						{!item.amount ? (
							<Link href={`/${locale}/slots`} className={styles.section__item}>
								<img src={item.image} alt={item.name} />
								<div className={styles.list}>
									<span>{t(`home.${item.name}`)}</span>
								</div>
							</Link>
						) : (
							<div className={styles.section__item}>
								<img src={item.image} alt={item.name} />
								<div className={styles.list__data}>
									<span className={styles.list__name}>{item.name}</span>
									<span className={styles.list__amountContainer}>
										<img src={COIN} alt={item.amount} />
										<span className={styles.list__amount}>{item.amount}</span>
									</span>
								</div>
							</div>
						)}
					</div>
				))}
			</Slider>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<span className={styles.section__title}>{t('home.monthly_hot_products')}</span>
				<div className={styles.section__content}>
					{renderCarousel(HOT_PRODUCTS_SLIDER)}
					<div className={styles.section__list}>{renderListSlider(HOT_PRODUCTS_LIST)}</div>
				</div>
			</div>
			<div className={styles.section}>
				<span className={styles.section__title}>{t('home.monthly_top_winners')}</span>
				<div className={styles.section__content}>
					{renderCarousel(TOP_WINNERS_SLIDER)}
					<div className={styles.section__list}>{renderListSlider(TOP_WINNERS_LIST)}</div>
				</div>
			</div>
		</div>
	);
}

export default HomeSlider;
