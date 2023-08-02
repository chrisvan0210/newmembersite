import classNames from 'classnames';
import { range } from 'lodash-es';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import styles from './page.module.scss';

const LustrousOcean = () => {
	const locale = useLocale();
	const t = useTranslations();
	const capitalizedLang = locale.toLocaleUpperCase();

	const renderBubbles = () => {
		return (
			<>
				{range(10).map(bubbleCount => (
					<div
						key={`bubble${bubbleCount + 1}`}
						className={classNames(styles[`lustrousOcean__bubble${bubbleCount + 1}`], styles.lustrousOcean__bubble)}
					/>
				))}
			</>
		);
	};
	return (
		<div className="pageContainer">
			<div className={styles.lustrousOcean}>
				<div className={styles.lustrousOcean__bubbleWrapper}>{renderBubbles()}</div>
				<div className={styles.lustrousOcean__content}>
					<div className={styles.lustrousOcean__centerContent}>
						<div className={styles[`lustrousOcean__logo${capitalizedLang}`]} />
						<div className={styles.lustrousOcean__text}>
							<Link locale={locale} href="/LustrousOcean" className={styles.lustrousOcean__moreDetails}>
								{t('games.lustrous_ocean_play_now')}
							</Link>
							<Link locale={locale} href="/LustrousOcean" className={styles.lustrousOcean__playForFun}>
								{t('games.lustrous_ocean_play_for_fun')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LustrousOcean;
