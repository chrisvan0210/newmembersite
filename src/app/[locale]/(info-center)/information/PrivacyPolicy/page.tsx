'use client';

import classNames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import FontIcon from '@/components/FontIcon';
import { CN_PRIVACY_POLICY_SELECT, PRIVACY_POLICY_SELECT } from '@/constants/infoCenter';
import { Locale } from '@/enums/app';

import InfoSelect from '../InfoSelect';
import styles from './page.module.scss';

function PrivacyPolicy() {
	const locale = useLocale();
	const t = useTranslations();
	const policy = locale === Locale.CN ? CN_PRIVACY_POLICY_SELECT : PRIVACY_POLICY_SELECT;
	const [showContent, setShowContent] = useState(false);
	const [activeContentId, setActiveContentId] = useState<string | null>(null);

	const handleShowContent = (title: string) => {
		if (activeContentId === title) {
			setShowContent(!showContent);
		} else {
			setActiveContentId(title);
			setShowContent(true);
		}
	};

	return (
		<div className={styles.container}>
			<InfoSelect activeTab={1} />
			<ol className={styles.list}>
				{policy.map(item => {
					const isActive = showContent && activeContentId === item.title;
					return (
						<div key={item.title}>
							<div
								className={classNames(styles.list__item, {
									[styles['list__item--active']]: isActive,
								})}
								onClick={() => handleShowContent(item.title)}
							>
								<li className={styles.list__label}>{t(`privacy_policy.${item.title}`)}</li>
								<FontIcon name={isActive ? 'arrow_up' : 'arrow_down'} size={16} />
							</div>
							<div
								id={item.title}
								className={classNames(styles.list__content, {
									[styles['list__content--show']]: isActive,
								})}
							>
								{item.content.map(content => (
									<p key={content}>{t(`privacy_policy.${content}`)}</p>
								))}
							</div>
						</div>
					);
				})}
			</ol>
		</div>
	);
}

export default PrivacyPolicy;
