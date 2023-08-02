'use client';

import classNames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useState } from 'react';

import FontIcon from '@/components/FontIcon';
import { MAIN_MENU } from '@/constants/app';
import useSegments from '@/hooks/useSegments';

import styles from './index.module.scss';

interface MobileMenuProps {
	visible: boolean;
	setVisible: (show: boolean) => void;
}

function MobileMenu({ visible, setVisible }: MobileMenuProps) {
	const lang = useLocale();
	const t = useTranslations();
	const [localVisibility, setLocalVisibility] = useState(visible);

	const { segment: firstSegment } = useSegments(1);

	const handleOnClick = () => {
		setLocalVisibility(!localVisibility);
		setVisible(!localVisibility);
	};

	return (
		<div className={visible ? styles.display : styles.hide}>
			{MAIN_MENU.map(item => {
				const isActive = firstSegment === item.link.split('/')[1];
				return (
					<div
						key={item.link}
						className={classNames(styles.container, {
							[styles['container--active']]: isActive,
						})}
						onClick={handleOnClick}
					>
						<Link locale={lang} href={item.link} className={styles.link}>
							<FontIcon name={item.icon} spacing="10px" />
							{t(`header.${item.label}`)}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default MobileMenu;
