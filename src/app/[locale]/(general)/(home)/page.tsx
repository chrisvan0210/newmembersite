'use client';

import '@/styles/main.scss';

import MainSlider from '@/components/MainSlider';
import SubFooter from '@/components/SubFooter';
import { HOME_SLIDER } from '@/constants/sliders';

import HomeSlider from './HomeSliders';
import HomeTabRight from './HomeTabRight';
import HomeTabs from './HomeTabs';
import styles from './page.module.scss';

export default function Home() {
	return (
		<div className="pageContainer">
			<MainSlider slides={HOME_SLIDER} useNewBanners />
			<div className={styles.homeContent}>
				<HomeSlider />
				<div className={styles.contents}>
					<HomeTabs />
					<HomeTabRight />
				</div>
				<SubFooter />
			</div>
		</div>
	);
}
