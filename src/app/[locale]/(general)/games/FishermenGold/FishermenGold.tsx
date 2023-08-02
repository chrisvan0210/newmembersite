import classNames from 'classnames';
import { range } from 'lodash-es';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import styles from './page.module.scss';

const FishermenGold = () => {
	const locale = useLocale();
	const t = useTranslations();

	const renderBubbles = () => {
		return (
			<>
				{range(10).map(bubbleCount => (
					<div
						key={`bubble${bubbleCount + 1}`}
						className={classNames(styles[`fishermenGold__bubble${bubbleCount + 1}`], styles.fishermenGold__bubble)}
					/>
				))}
			</>
		);
	};
	return (
		<div className="pageContainer">
			<div className={styles.fishermenGold}>
				<div className={styles.fishermenGold__bubbleWrapper}>{renderBubbles()}</div>
				<div className={styles.fishermenGold__content}>
					<div className={styles.fishermenGold__centerContent}>
						<div className={styles.fishermenGold__logo} />
						<div className={styles.fishermenGold__holder}>
							<div className={styles.fishermenGold__fish1} />
							<div className={styles.fishermenGold__fish2} />
							<div className={styles.fishermenGold__fish3} />
							<div className={styles.fishermenGold__fish4} />
						</div>
						<div className={styles.fishermenGold__text}>
							<span className={styles.fishermenGold__subTitle}>
								{t('games.fishermen_gold_sub_title1')}
								<br />
								{t('games.fishermen_gold_sub_title2')}
							</span>
							<Link locale={locale} href="/fishermenGold" className={styles.fishermenGold__moreDetails}>
								{t('games.fishermen_gold_play_now')}
							</Link>
							<Link locale={locale} href="/fishermenGold" className={styles.fishermenGold__playForFun}>
								{t('games.fishermen_gold_play_for_fun')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FishermenGold;
