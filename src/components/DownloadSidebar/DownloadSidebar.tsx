'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback } from 'react';

import { images } from '@/config/resources';

import FontIcon from '../FontIcon';
import styles from './index.module.scss';

const DownloadSidebar = () => {
	const lang = useLocale();
	const t = useTranslations();

	const handleDownloads = useCallback(() => {
		window.open('/en-US/Mobile#Mobile', '_self');
	}, []);

	const handleDownloadSports = useCallback((pType: 'android' | 'ios') => {
		const qrCode = pType === 'android' ? '#qrcodesports' : '#qrcodesports_IOS';

		window.open(`/Mobile${qrCode}`, '_self');
	}, []);

	const handleDownloadMain = useCallback((pType: 'android' | 'ios') => {
		const qrCode = pType === 'android' ? '#qrcodemain' : '#qrcodesports_IOS';

		window.open(`/Mobile${qrCode}`, '_self');
	}, []);

	return (
		<div
			className={classNames(styles.downloadSidebar, styles[`downloadSidebar--${lang}Background`])}
			onClick={handleDownloads}
		>
			<section className={styles.downloadSidebar__slidingDownloadSection}>
				<h3 className={styles.downloadSidebar__title}>{t('download_sidebar.title')}</h3>
				<h4 className={styles.downloadSidebar__description}>{t('download_sidebar.description')}</h4>
				<div className={styles.downloadSidebar__sportyApp}>
					<div className={styles.downloadSidebar__sportyAppContent}>
						<span className={styles.downloadSidebar__fb88sportsLogo}>
							<Image src={images.fb88sports_logo} alt="fb88sports logo" width={81} height={79} />
						</span>
						<span className={styles.downloadSidebar__fb88sportsDescription}>
							<div>{t('download_sidebar.sports_app')}</div>
							<div>{t('download_sidebar.size')}: 32.7 MB</div>
						</span>
					</div>
					<div className={styles.downloadSidebar__sidebarSports}>
						<Link
							href="/"
							className={styles.downloadSidebar__downloadLink}
							onClick={() => handleDownloadSports('android')}
						>
							<FontIcon name="android_icon" className={styles.downloadSidebar__icon} />
							{t('download_sidebar.download')}
						</Link>
						<Link href="/" className={styles.downloadSidebar__downloadLink} onClick={() => handleDownloadSports('ios')}>
							<FontIcon name="apple_icon" className={styles.downloadSidebar__icon} />
							{t('download_sidebar.download')}
						</Link>
					</div>
				</div>
				<div className={styles.downloadSidebar__mainApp}>
					<div className={styles.downloadSidebar__mainAppContent}>
						<span className={styles.downloadSidebar__fb88sportsLogo}>
							<Image src={images.fb88app_logo} alt="fb88app logo" width={81} height={79} />
						</span>
						<span className={styles.downloadSidebar__fb88sportsDescription}>
							<div>{t('download_sidebar.main_app')}</div>
							<div>{t('download_sidebar.size')}: 26.9 MB</div>
						</span>
					</div>
					<div className={styles.downloadSidebar__sidebarSports}>
						<Link
							href="/"
							className={styles.downloadSidebar__downloadLink}
							onClick={() => handleDownloadMain('android')}
						>
							<FontIcon name="android_icon" className={styles.downloadSidebar__icon} />
							{t('download_sidebar.download')}
						</Link>
						<Link href="/" className={styles.downloadSidebar__downloadLink} onClick={() => handleDownloadMain('ios')}>
							<FontIcon name="apple_icon" className={styles.downloadSidebar__icon} />
							{t('download_sidebar.download')}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DownloadSidebar;
