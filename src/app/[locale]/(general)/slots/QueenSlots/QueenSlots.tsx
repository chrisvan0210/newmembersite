'use client';

import classNames from 'classnames';
import { range } from 'lodash-es';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Locale } from '@/enums/app';

import styles from './page.module.scss';

type CharacterName = 'goku' | 'frieza';
type ComponentType = 'Circle' | 'Particles';

const CHARACTER_NAME: CharacterName[] = ['frieza', 'goku'];
const COMPONENT_TYPE: ComponentType[] = ['Circle', 'Particles'];

const QueenSlots = () => {
	const t = useTranslations();
	const locale = useLocale();

	const handleClickMoreDetails = () => {
		window.open(`/${locale}/QueenSlots/GamePlay`, 'queen');
	};

	const renderCharacterComponent = (characterName: CharacterName, type: ComponentType) => (
		<>
			{range(7).map(circleIdx => (
				<div key={circleIdx + 1} className={styles[`queenSlots__${characterName + type}${circleIdx + 1}`]} />
			))}
		</>
	);

	const renderLightning = () => (
		<>
			{range(3).map(lightningIdx => (
				<div key={lightningIdx + 1} className={styles[`queenSlots__lightning${lightningIdx + 1}`]} />
			))}
		</>
	);

	return (
		<div className="pageContainer">
			<div className={styles.queenSlots}>
				<div className={styles.queenSlots__contentContainer}>
					<div className={styles.queenSlots__content}>
						<div className={styles.queenSlots__animationContainer}>
							<div className={styles.queenSlots__dragonBalls5} />
							<div className={styles.queenSlots__dragonBalls4} />
							<div className={styles.queenSlots__dragonBalls1} />
							<div className={styles.queenSlots__frieza}>
								<div className={styles.queenSlots__friezaSaiyan} />
								{renderCharacterComponent(CHARACTER_NAME[0], COMPONENT_TYPE[0])}
								{renderCharacterComponent(CHARACTER_NAME[0], COMPONENT_TYPE[1])}
							</div>
							<div className={styles.queenSlots__laptopStreetFighter} />
							<div className={styles.queenSlots__goku}>
								<div className={styles.queenSlots__saiyan} />
								{renderLightning()}
								{renderCharacterComponent(CHARACTER_NAME[1], COMPONENT_TYPE[0])}
								{renderCharacterComponent(CHARACTER_NAME[1], COMPONENT_TYPE[1])}
							</div>
							<div className={styles.queenSlots__chunli} />
						</div>
						<div className={styles.queenSlots__highJackpots}>
							<div className={styles.queenSlots__highJackpotsContent}>
								<div className={styles.queenSlots__highJackpotsLogo} />
								<span className={styles.queenSlots__highJackpotsText}>
									{t('slots.queen_slots_high_jackpots_text')} <br />
									<span
										className={classNames(styles.queenSlots__highJackpotsFont, {
											[styles['queenSlots--mediumFontSize']]: locale === Locale.VN,
										})}
									>
										{t('slots.queen_slots_high_jackpots_font')}
									</span>
								</span>
								<span className={styles.queenSlots__highJackpotsSubText}>
									{t('slots.queen_slots_high_jackpots_sub_text')}
								</span>
								<button className={styles.queenSlots__highJackpotsMoreDetails} onClick={handleClickMoreDetails}>
									{t('slots.queen_slots_high_jackpots_more_details')}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QueenSlots;
