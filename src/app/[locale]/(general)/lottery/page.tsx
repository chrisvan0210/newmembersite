'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import SideWidgetSlider from '@/components/SideWidgetSlider';
import { images } from '@/config/resources';
import { NUMBER_GAME } from '@/constants/games';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';

const gameImageByLang: Record<Locale, string> = {
	[Locale.EN]: images.lottery_game_en,
	[Locale.VN]: images.lottery_game_vn,
	[Locale.CN]: images.lottery_game_cn,
	[Locale.TH]: images.lottery_game_th,
};

function Lottery() {
	const lang = useLocale();
	const t = useTranslations();
	const gameImage = gameImageByLang[lang as Locale];
	const [isSideWidgetVisible, setIsSideWidgetVisible] = useState(false);
	const widgetContent = NUMBER_GAME;

	const handleClickPlayNow = () => {
		window.open('Lottery/NumberGame', 'numbergame');
	};

	const handleClickMoreInfo = () => {
		setIsSideWidgetVisible(!isSideWidgetVisible);
	};

	return (
		<div className="pageContainer">
			<div className={styles.lottery}>
				<div className={styles.lottery__thumb}>
					<div className={styles.lottery__box}>
						<span className={styles.lottery__name}>
							<Image
								src={images.lottery_number_game}
								width={120}
								height={65}
								alt="number game icon"
								className={styles.lottery__numberGameIcon}
							/>
							<Image src={gameImage} width={207} height={101} alt="number game" />
						</span>
						<div className={styles.lottery__details}>
							<p>{t('lottery.lottery_details')}</p>
						</div>
						<div className={styles.lottery__buttonContainer}>
							<button className={styles.lottery__defaultButton} onClick={handleClickPlayNow}>
								{t('lottery.play_now')}
							</button>
							<span className={styles.lottery__moreInfo} onClick={handleClickMoreInfo}>
								{t('lottery.more_info')}
							</span>
						</div>
						<div className={styles.lottery__boxWrap}>
							<Image
								src={images.lottery_lotto_img}
								className={styles.lottery__lottoImg}
								alt="number game"
								width={469}
								height={391}
							/>
						</div>
					</div>
				</div>
			</div>
			{isSideWidgetVisible && (
				<SideWidgetSlider content={widgetContent} visible={isSideWidgetVisible} setVisible={setIsSideWidgetVisible} />
			)}
		</div>
	);
}

export default Lottery;
