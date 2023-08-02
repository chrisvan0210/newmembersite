import { useTranslations } from 'next-intl';
import React from 'react';

import { images } from '@/config/resources';

import MobileDownloads from './MobileDownloads';
import styles from './page.module.scss';
import PhoneDisplay from './PhoneDisplay';

function Ios() {
	const t = useTranslations();

	const descriptions = [
		'content3_desc1',
		'content3_desc2',
		'content3_desc3',
		'content3_desc4',
		'content3_desc5',
		'content3_desc6',
		'content3_desc7',
	];

	return (
		<div className={styles.content__top}>
			<PhoneDisplay image={images.ios_content} />
			<div className={styles.content__mobileContent}>
				<MobileDownloads os="ios" />
				<div className={styles.content__subHeader}>
					<span className={styles.content__iosHeader}>{t('mobile_page.content3_header')}</span>
					<span className={styles.content__iosSubHeader}>{t('mobile_page.content3_subHeader')}</span>
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

export default Ios;
