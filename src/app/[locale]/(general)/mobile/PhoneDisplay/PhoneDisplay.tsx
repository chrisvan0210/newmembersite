import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { images } from '@/config/resources';

import styles from './index.module.scss';

function PhoneDisplay({ image }: { image: string }) {
	const t = useTranslations();
	const locale = useLocale();

	return (
		<div className={styles.phoneDisplay}>
			<Image
				src={images.android_phone}
				alt={t('mobile_page.android_phone')}
				width={369}
				height={723}
				className={styles.phoneDisplay__container}
			/>
			<Image
				src={`${image}-${locale}.jpg`}
				alt={t('mobile_page.android_content')}
				width={276}
				height={598}
				className={styles.phoneDisplay__image}
			/>
		</div>
	);
}

export default PhoneDisplay;
