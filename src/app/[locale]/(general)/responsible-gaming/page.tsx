import { range } from 'lodash-es';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import SubFooter from '@/components/SubFooter';

import styles from './page.module.scss';

const ResponsibleGaming = () => {
	const t = useTranslations();

	const renderList = (listCount: number, listNumber: number) => {
		return (
			<ul>
				{range(listCount).map(item => (
					<li key={item}>{t(`responsible_gaming.content_list${listNumber}.${item}`)}</li>
				))}
			</ul>
		);
	};

	return (
		<div className="pageContainer">
			<div className={styles.responsibleGaming}>
				<div className={styles.responsibleGaming__container}>
					<div className={styles.responsibleGaming__header}>
						<h1>{t('responsible_gaming.header')}</h1>
					</div>
					<div className={styles.responsibleGaming__content}>
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_header')}</p>
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_paragraph1')}</p>
						{renderList(9, 1)}
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_paragraph2')}</p>
						{renderList(4, 2)}
						<p>
							{t('responsible_gaming.content_paragraph3.0')}
							<Link href="http://www.gamcare.org.uk" className={styles.responsibleGaming__link}>
								{t('responsible_gaming.content_paragraph3.1')}
							</Link>{' '}
							{t('responsible_gaming.content_paragraph3.2')}
						</p>
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_paragraph4')}</p>
						<p>{t('responsible_gaming.content_paragraph5')}</p>
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_paragraph6')}</p>
						<p>{t('responsible_gaming.content_paragraph7')}</p>
						<p>{t('responsible_gaming.content_paragraph8')}</p>
						<p className={styles.responsibleGaming__yellowText}>{t('responsible_gaming.content_paragraph9')}</p>
						<p>{t('responsible_gaming.content_paragraph10')}</p>
						<ul>
							<li>
								{t('responsible_gaming.content_list3.0')}
								<Link href="http://www.netnanny.com" className={styles.responsibleGaming__link}>
									{t('responsible_gaming.content_list3_link1')}
								</Link>
							</li>
							<li>
								{t('responsible_gaming.content_list3.1')}
								<Link href="http://www.cybersitter.com" className={styles.responsibleGaming__link}>
									{t('responsible_gaming.content_list3_link2')}
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<SubFooter />
			</div>
		</div>
	);
};

export default ResponsibleGaming;
