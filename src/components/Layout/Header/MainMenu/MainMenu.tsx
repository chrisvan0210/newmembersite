'use client';

import classNames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import FontIcon from '@/components/FontIcon';
import { MAIN_MENU } from '@/constants/app';
import type { Menu } from '@/enums/app';
import { Locale } from '@/enums/app';
import useSegments from '@/hooks/useSegments';

import styles from './index.module.scss';

function MainMenu(props: { handleIsHovered: (status: boolean) => void; handleSelectedNav: (navName: Menu) => void }) {
	const locale = useLocale();
	const t = useTranslations();

	const { segment: firstSegment } = useSegments(1);

	const handleOnMouseOver = (navName: Menu) => {
		props.handleIsHovered(true);
		props.handleSelectedNav(navName);
	};
	const handleOnMouseOut = () => {
		props.handleIsHovered(false);
	};

	return (
		<div className={styles.menu}>
			{MAIN_MENU.map((item, index) => {
				const isOffsetLabel = locale === Locale.TH || locale === Locale.CN;
				const isActive = firstSegment === item.link.split('/')[1];

				return (
					<Link
						locale={locale}
						href={item.link}
						key={item.link}
						className={classNames(styles.menu__link, {
							[styles['menu__link--active']]: isActive,
						})}
						onMouseOver={() => handleOnMouseOver(item.label as Menu)}
						onMouseOut={handleOnMouseOut}
					>
						<FontIcon name={item.icon} className={styles.menu__icon} />
						<span
							className={classNames(styles.menu__label, {
								[styles['menu__label--offset']]: isOffsetLabel,
								[styles['menu__label--hide']]: index < 2,
							})}
						>
							{t(`header.${item.label}`)}
						</span>
					</Link>
				);
			})}
		</div>
	);
}

export default MainMenu;
