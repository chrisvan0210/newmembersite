import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import type { Settings } from 'react-slick';

// import Slider from 'react-slick';
import { COIN, SLIDER_SETTINGS, TOP_WINNERS_LIST } from '@/constants/sliders';
import type { ListSliderData } from '@/types/app';

import styles from './index.module.scss';

const listSettings: Settings = {
	...SLIDER_SETTINGS,
	slidesToShow: 5,
	vertical: true,
	speed: 800,
	autoplaySpeed: 3000,
};

const sliderItems = (item: ListSliderData) => {
	return (
		<div key={item.name}>
			<div className={styles.sliders__item}>
				<div className={styles.sliders__product}>
					<Image src={item.image} alt={item.name} width={55} height={35} />
					<p>{item.product}</p>
				</div>
				<div className={styles.sliders__player}>{item.name}</div>
				<div className={styles.sliders__amount}>
					<Image src={COIN} alt={item.name} width={15} height={15} />
					<span className={styles.list__amount}>{item.amount}</span>
				</div>
			</div>
		</div>
	);
};
const Slider = dynamic(() => import('react-slick'), {
	ssr: false,
	loading: () => <>{TOP_WINNERS_LIST.map(item => sliderItems(item))}</>,
});

function WinnersSlider() {
	return <Slider {...listSettings}>{TOP_WINNERS_LIST.map(item => sliderItems(item))}</Slider>;
}

export default WinnersSlider;
