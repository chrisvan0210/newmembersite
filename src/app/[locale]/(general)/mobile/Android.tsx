import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { images } from '@/config/resources';
import { INSTALLATION_GUIDE } from '@/constants/mobile';

import MobileDownloads from './MobileDownloads';
import styles from './page.module.scss';
import PhoneDisplay from './PhoneDisplay';

function Android() {
	const t = useTranslations();

	const descriptions = [
		'content1_desc1',
		'content1_desc2',
		'content1_desc3',
		'content1_desc4',
		'content1_desc5',
		'content1_desc6',
		'content1_desc7',
	];

	return (
		<div className={styles.content__top}>
			<PhoneDisplay image={images.android_content} />
			<div className={styles.content__mobileContent}>
				<div className={styles.content__mobileAndroidHeader}>
					<Image src={images.android} alt={t('common.android')} width={90} height={135} />
					<span>{t('mobile_page.content1_header')}</span>
				</div>
				<MobileDownloads os="android" />
				<Link href={INSTALLATION_GUIDE} target="_blank" className={styles.content__mobileInstallGuide}>
					<span className={styles.content__mobileInstallGuideText}>{t('mobile_page.how_to_install')}</span>
				</Link>
				<ul className={styles.content__mobileList}>
					{descriptions.map(desc => (
						<li key={desc}>{t(`mobile_page.${desc}`)}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Android;
