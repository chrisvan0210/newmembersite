'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import CustomButton from '@/components/CustomButton';
import type { Option } from '@/components/DropDownMenu';
import DropDownMenu from '@/components/DropDownMenu';
import FontIcon from '@/components/FontIcon';
import MainSlider from '@/components/MainSlider';
import SideWidgetSlider from '@/components/SideWidgetSlider';
import { CASINO_TOP_WINNERS, LIVE_CASINO_CARDS, LIVE_CASINO_SLIDER } from '@/constants/casino';
import { CLUB_DATA, CLUB_SELECT, GAME_TYPE_SELECT } from '@/constants/casinoGames';
import { COIN, SLIDER_SETTINGS } from '@/constants/sliders';
import { Locale } from '@/enums/app';
import type { GameDisplayData } from '@/types/app';

import styles from './page.module.scss';

const listSettings: Settings = {
	...SLIDER_SETTINGS,
	slidesToShow: 5,
	vertical: true,
};

function Games() {
	const t = useTranslations();
	const locale = useLocale();
	const [imageLocale, setImageLocale] = useState(locale);
	const [activeTab, setActiveTab] = useState(0);
	const activeData = CLUB_DATA[activeTab];
	const [isSideWidgetVisible, setIsSideWidgetVisible] = useState(false);
	const [widgetContent, setWidgetContent] = useState<GameDisplayData>(CLUB_DATA[activeTab].tables[0].info);

	const handlePickClub = (i: number | string) => {
		setActiveTab(+i);
	};
	const handleSelectClub = (i: Option) => {
		setActiveTab(+i);
	};

	const handleSelectGameType = () => {
		// TODO
	};

	const handleOnClickMoreInfo = (i: number) => {
		setWidgetContent(CLUB_DATA[activeTab].tables[i].info);
		setIsSideWidgetVisible(true);
	};

	const renderCasinoCards = () => {
		return (
			<div className={styles.liveCasino__content}>
				{LIVE_CASINO_CARDS.map((card, i) => (
					<div key={card.label} className={styles.clubCard}>
						<div className={styles.clubCard__bg}>
							<Image
								src={card.image}
								height={346}
								width={card.imageWidth}
								alt={card.label}
								style={{ left: card.imageXoffset }}
								className={styles.clubCard__image}
							/>
							<div className={styles.clubCard__infoContainer}>
								<Image
									src={`${card.text}-${imageLocale}.png`}
									height={80}
									width={248}
									alt={card.label}
									className={styles.clubCard__text}
									onError={() => setImageLocale(Locale.EN)}
								/>
								<div className={styles.clubCard__button}>
									<span className={styles.clubCard__play}>{t('common.play_now')}</span>
								</div>
								<span className={styles.clubCard__info} onClick={() => handlePickClub(i + 1)}>
									{t('common.more_info')}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const renderTopWinners = () => {
		return (
			<div className={styles.games__listSliderContainer}>
				<Slider {...listSettings}>
					{CASINO_TOP_WINNERS.map(item => (
						<div key={item.player}>
							<div className={styles.topWinner}>
								<Image src={item.image} alt={item.player} width={56} height={34} className={styles.topWinner__image} />
								<span className={styles.topWinner__game}>{item.game}</span>
								<span className={styles.topWinner__name}>{item.player}</span>
								<span className={styles.topWinner__amountContainer}>
									<Image src={COIN} alt={item.amount} width={14} height={14} />
									<span className={styles.topWinner__amount}>{item.amount}</span>
								</span>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	};

	const renderCasinoGames = () => {
		return (
			<div className={styles.games}>
				<div className={styles.games__filterTabs}>
					{activeData?.gamesFilter.map(game => (
						<div key={game.name} className={styles.games__filter}>
							<FontIcon name={game.icon} size={14} spacing="8px" />
							<span className={styles.games__filterName}>{t(`casino.${game.name}`)}</span>
						</div>
					))}
				</div>
				<div className={styles.games__content}>
					<div className={styles.games__videoAndWinners}>
						<div className={styles.games__videoContainer}>
							<span className={styles.games__sectionHeader}>{t('casino.featured_club')}</span>
							<video autoPlay muted loop controls src={activeData?.video} className={styles.games__video} />
						</div>
						<div className={styles.games__topWinnerContainer}>
							<span className={styles.games__sectionHeader}>{t('casino.top_winners')}</span>
							{renderTopWinners()}
						</div>
					</div>
					{activeData?.tables.map((table, i) => (
						<div key={table.label} className={styles.tables__item}>
							<Image src={table.image} alt={table.label} width={286} height={172} className={styles.tables__image} />
							<div className={styles.tables__names}>
								<span className={styles.tables__game}>{t(`casino.${table.label}`)}</span>
								<span className={styles.tables__club}>{t(`casino.${CLUB_SELECT[activeTab].name}`)}</span>
							</div>
							<div className={styles.tables__mask}>
								<Link href={table.playLink} target="_blank" className={styles.tables__link}>
									<CustomButton
										variant="yellowTransparent"
										text={t('common.play_now')}
										className={styles.tables__button}
									/>
								</Link>
								<span className={styles.tables__info} onClick={() => handleOnClickMoreInfo(i)}>
									{t('common.more_info')}
								</span>
							</div>
						</div>
					))}
				</div>
				{isSideWidgetVisible && (
					<SideWidgetSlider content={widgetContent} visible={isSideWidgetVisible} setVisible={setIsSideWidgetVisible} />
				)}
			</div>
		);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={LIVE_CASINO_SLIDER} useNewBanners />
			<div className={styles.liveCasino}>
				<div className={styles.liveCasino__select}>
					{CLUB_SELECT.map((item, i) => (
						<button
							key={item.options.label}
							className={classNames(styles.liveCasino__selectButtons, {
								[styles['liveCasino__selectButtons--selected']]: activeTab === i,
							})}
							onClick={() => handlePickClub(i)}
						>
							{t(item.options.label)}
						</button>
					))}
				</div>
				<div className={styles.dropDownMenu}>
					<DropDownMenu
						options={CLUB_SELECT.map(club => club.options)}
						defaultValue={CLUB_SELECT[0].options}
						onSelect={handleSelectClub}
						itemClass={styles.dropDownMenu__item}
						selectedItemClass={styles.dropDownMenu__itemSelected}
					/>
					<DropDownMenu
						options={GAME_TYPE_SELECT}
						defaultValue={GAME_TYPE_SELECT[0]}
						onSelect={handleSelectGameType}
						itemClass={styles.dropDownMenu__item}
						selectedItemClass={styles.dropDownMenu__itemSelected}
					/>
				</div>
				{activeTab === 0 ? renderCasinoCards() : renderCasinoGames()}
			</div>
		</div>
	);
}

export default Games;
