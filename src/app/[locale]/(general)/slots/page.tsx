'use client';

import classNames from 'classnames';
import { map } from 'lodash-es';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

import Card from '@/components/Card';
import DropdownMenu from '@/components/DropDownMenu';
import FontIcon from '@/components/FontIcon';
import MainSlider from '@/components/MainSlider';
import SideWidgetSlider from '@/components/SideWidgetSlider';
import { SLOTS_CATEGORY, SLOTS_FILTER } from '@/constants/menu-selection';
import { SLOTS_SLIDER } from '@/constants/sliders';
import { SlotsCategory, SlotsFilter } from '@/enums/menu-selection';
import type { GameDisplayData, SlotsCardType } from '@/types/app';
import type { SlotsBottomMenuType, SlotsTopMenuType } from '@/types/menu-selection';
import { setStyleBySelector } from '@/utils/slide-bar';

import Jackpot from './Jackpot';
import styles from './page.module.scss';

const slotSample: SlotsCardType = {
	id: 1,
	category: SlotsCategory.ALL,
	filter: SlotsFilter.FAVORITE,
	image: 'https://cdn.hanwei1234.com/Content/images/slot/hdslots/Thumbnails/MysticalSpirits.jpg',
	label: 'Mystical Spirits',
	more_info: {
		type: SlotsCategory.ALL,
		title: 'Mystical Spirits',
		description:
			'Legend has it that, in a mysterious forest isolated on the Paraná River, there are three mystical spirits named Salamander, Undine and Leafy.',
		infoImages: ['https://cdn.hanwei1234.com/Content/images/slot/hdslots/Thumbnails/MysticalSpirits.jpg'],
		playLink: `${process.env.NEXT_PUBLIC_FB88SITE}`,
		rulesLink: `${process.env.NEXT_PUBLIC_FB88SITE}/en-US/Information/Rules_Slots`,
	},
};
const slotsData = new Array(20).fill(slotSample);
slotsData.forEach((slot, index) => {
	const newSlot = { ...slot, id: index + 1 };
	slotsData[index] = newSlot;
});

function Slots() {
	const t = useTranslations();
	const [topActive, setTopActive] = useState(SlotsCategory.ALL);
	const [bottomActive, setBottomActive] = useState(SlotsFilter.FAVORITE);
	const [isSideWidgetVisible, setIsSideWidgetVisible] = useState(false);
	const [widgetContent, setWidgetContent] = useState<GameDisplayData>(slotsData[0].more_info);

	const sliderTopRef = useRef<HTMLDivElement>(null);
	const sliderBottomRef = useRef<HTMLDivElement>(null);

	const router = useRouter();

	useEffect(() => {
		setStyleBySelector(sliderTopRef.current!, '.top-slide');
		setStyleBySelector(sliderBottomRef.current!, '.bottom-slide');
	}, [topActive, bottomActive]);

	const handleMoreInfo = (details: GameDisplayData) => {
		setIsSideWidgetVisible(true);
		setWidgetContent(details);
	};
	const handlePlayReal = () => {
		router.replace('/');
		// TODO: handle open game here
	};

	const selectCategory = () => {};
	const selectFilter = () => {};

	const renderTopMenu = (item: SlotsTopMenuType) => {
		const isActive = topActive === item.value;
		return (
			<div
				key={item.value}
				className={classNames(styles.topMenu__item, {
					'top-slide': isActive,
					[styles['topMenu__item--active']]: isActive,
				})}
				onClick={() => setTopActive(item.value)}
			>
				<Image src={item.icon} alt={item.label} width={23} height={23} />
				<span>{t(item.label)}</span>
			</div>
		);
	};

	const renderBottomMenu = (item: SlotsBottomMenuType) => {
		const isActive = bottomActive === item.value;
		return (
			<div
				key={item.value}
				className={classNames(styles.bottomMenu__item, {
					'bottom-slide': isActive,
					[styles['bottomMenu__item--active']]: isActive,
				})}
				onClick={() => setBottomActive(item.value)}
			>
				<FontIcon name={item.icon} size={20} />
				<span>{t(item.label)}</span>
			</div>
		);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={SLOTS_SLIDER} />
			<div className={styles.slotsContent}>
				<div className={styles.topMenu}>
					{map(SLOTS_CATEGORY, renderTopMenu)}
					<div className={styles.topSlideEffect} ref={sliderTopRef} />
				</div>
				<div className={styles.bottomMenu}>
					{map(SLOTS_FILTER, renderBottomMenu)}
					<div className={styles.bottomSlideEffect} ref={sliderBottomRef} />
				</div>
				<div className={styles.mobile}>
					<div className={styles.mobile__left}>
						<DropdownMenu
							options={SLOTS_CATEGORY}
							onSelect={selectCategory}
							defaultValue={SLOTS_CATEGORY[0]}
							itemClass={styles.mobile__item}
							selectedItemClass={styles.mobile__itemSelected}
						/>
					</div>
					<div className={styles.mobile__right}>
						<DropdownMenu
							options={SLOTS_FILTER}
							onSelect={selectFilter}
							defaultValue={SLOTS_FILTER[0]}
							itemClass={styles.mobile__item}
							selectedItemClass={styles.mobile__itemSelected}
						/>
					</div>
				</div>
				<div className={styles.contentsContainer}>
					<div className={styles.winners}>
						<Jackpot />
					</div>
					{slotsData.map(item => (
						<Card
							key={item.id}
							image={item.image}
							label={item.label}
							more_info={item.more_info}
							playReal={handlePlayReal}
							moreInfo={handleMoreInfo}
						/>
					))}
				</div>
			</div>
			{isSideWidgetVisible && (
				<SideWidgetSlider
					content={widgetContent}
					visible={isSideWidgetVisible}
					setVisible={setIsSideWidgetVisible}
					isFromAPI
				/>
			)}
		</div>
	);
}

export default Slots;
