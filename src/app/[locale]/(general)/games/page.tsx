'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import MainSlider from '@/components/MainSlider';
import SideWidgetSlider from '@/components/SideWidgetSlider';
import { GAME_DISPLAY, SABA_CLUB } from '@/constants/games';
import { GAMES_SLIDER } from '@/constants/sliders';
import { GameType, Locale } from '@/enums/app';
import type { GameDisplayData } from '@/types/app';

import GameAnimatedObjects from './GameAnimatedObjects';
import styles from './page.module.scss';

function Games() {
	const t = useTranslations();
	const locale = useLocale();
	const [isSideWidgetVisible, setIsSideWidgetVisible] = useState(false);
	const [widgetContent, setWidgetContent] = useState<GameDisplayData>(GAME_DISPLAY[0]);

	const handleOnClickGameInfo = (i: number) => {
		setWidgetContent(GAME_DISPLAY[i]);
		setIsSideWidgetVisible(true);
	};

	const handleOnClickSabaInfo = () => {
		setWidgetContent(SABA_CLUB);
		setIsSideWidgetVisible(true);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={GAMES_SLIDER} insetShadow="58px" />
			<div className={styles.games}>
				<div className={styles.games__content}>
					{GAME_DISPLAY.map((game, i) => (
						<div
							key={game.type}
							style={{ background: `url(${game.background}) no-repeat top center` }}
							className={styles.games__item}
						>
							<div className={styles.games__imagesContainer}>
								<GameAnimatedObjects game={game.type as GameType} />
								<div className={styles.games__mask}>
									<CustomButton
										variant="yellowTransparent"
										text={t('common.play_now')}
										className={styles.games__button}
									/>
									{game.type !== GameType.FISHING_KING && (
										<Link href={game.tryLink!} target="_blank" className={styles.games__links}>
											{t('common.play_for_fun')}
										</Link>
									)}
									<span className={styles.games__links} onClick={() => handleOnClickGameInfo(i)}>
										{t('common.more_info')}
									</span>
								</div>
								<Image
									src={game.image1!}
									alt={game.image1!}
									width={game.image1Width}
									height={game.image1Height}
									className={styles.games__image1}
									style={{ top: game.image1Top, left: game.image1Left }}
								/>
								{game.image2 && (
									<Image
										src={game.image2!}
										alt={game.image2!}
										width={game.image2Width}
										height={game.image2Height}
										className={styles.games__image2}
										style={{ top: game.image2Top, left: game.image2Left }}
									/>
								)}
							</div>
						</div>
					))}
				</div>
				{locale === Locale.VN && (
					<div className={styles.congGames}>
						<GameAnimatedObjects game={GameType.SABA_CLUB} />
						<div className={styles.congGames__mask}>
							<CustomButton variant="yellowTransparent" text={t('common.play_now')} className={styles.games__button} />
							<span className={styles.games__links} onClick={handleOnClickSabaInfo}>
								{t('common.more_info')}
							</span>
						</div>
					</div>
				)}
				{isSideWidgetVisible && (
					<SideWidgetSlider content={widgetContent} visible={isSideWidgetVisible} setVisible={setIsSideWidgetVisible} />
				)}
			</div>
		</div>
	);
}

export default Games;
