import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { images } from '@/config/resources';

import styles from './page.module.scss';
import PhoneDisplay from './PhoneDisplay';

function Html() {
	const t = useTranslations();

	const descriptions = [
		'content2_desc1',
		'content2_desc2',
		'content2_desc3',
		'content2_desc4',
		'content2_desc5',
		'content2_desc6',
	];

	return (
		<div className={styles.content__top}>
			<PhoneDisplay image={images.html_content} />
			<div className={styles.content__mobileContent}>
				<Image
					src={images.html_qr}
					alt={t('common.android')}
					width={395}
					height={198}
					className={styles.content__htmlImage}
				/>
				<div className={styles.content__subHeader}>
					<span className={styles.content__html5}>HTML 5</span>
					<span>{t('mobile_page.content2_header')}</span>
				</div>
				<ul className={styles.content__mobileList}>
					{descriptions.map(desc => (
						<li key={desc}>{t(`mobile_page.${desc}`)}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Html;
