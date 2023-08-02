import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { CONGGAME_ANIMATED_OBJECTS, DEFAULT_ANIMATED_OBJECTS, FISHKING_ANIMATED_OBJECTS } from '@/constants/games';
import { GameType } from '@/enums/app';

import styles from './index.module.scss';

function GameAnimatedObjects({ game }: { game: GameType }) {
	const t = useTranslations();

	return (
		<div className={styles.background}>
			{(game === GameType.LUSTROUS_OCEAN || game === GameType.FISHERMEN_GOLD) && (
				<>
					{DEFAULT_ANIMATED_OBJECTS.map(object => (
						<Image
							key={object.style}
							src={object.image}
							alt={t(`games.${object.label}`)}
							width={object.width}
							height={object.height}
							className={styles[`${object.style}`]}
						/>
					))}
				</>
			)}
			{game === GameType.FISHING_KING && (
				<>
					{FISHKING_ANIMATED_OBJECTS.map(object => (
						<Image
							key={object.style}
							src={object.image}
							alt={t(`games.${object.label}`)}
							width={object.width}
							height={object.height}
							className={styles[`${object.style}`]}
						/>
					))}
				</>
			)}
			{game === GameType.SABA_CLUB && (
				<>
					{CONGGAME_ANIMATED_OBJECTS.map(object => (
						<Image
							key={object.style}
							src={object.image}
							alt={t(`games.${object.label}`)}
							width={object.width}
							height={object.height}
							className={styles[`${object.style}`]}
						/>
					))}
				</>
			)}
		</div>
	);
}

export default GameAnimatedObjects;
