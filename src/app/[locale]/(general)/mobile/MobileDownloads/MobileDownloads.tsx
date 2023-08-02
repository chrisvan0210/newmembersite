import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import { images } from '@/config/resources';
import { ANDROID_SUPPORT, INSTALLATION_GUIDE, IOS_SUPPORT, MOBILE_DOWNLOADS } from '@/constants/mobile';
import useWindowWidth from '@/hooks/useWindowWidth';
import QrCodeModal from '@/modals/QrCodeModal';

import styles from './index.module.scss';

interface MobileDownloadsProps {
	os: 'android' | 'ios';
}

const MOBILE_WIDTH = 576;

function MobileDownloads({ os }: MobileDownloadsProps) {
	const t = useTranslations();
	const width = useWindowWidth();
	const [showQRModal, setShowQRModal] = useState(false);
	const [modalContent, setModalContent] = useState(MOBILE_DOWNLOADS[0]);
	const ios = os === 'ios';

	const handleOnClick = (link: string, i: number) => {
		if (width < MOBILE_WIDTH) {
			window.location.href = link;
		} else {
			setModalContent(MOBILE_DOWNLOADS[i]);
			setShowQRModal(true);
		}
	};

	const renderQrModal = () => {
		return (
			<QrCodeModal onClose={() => setShowQRModal(false)} height={560} background={`url(${images.mobileQr_modal_bg})`}>
				<div className={styles.modal}>
					<span className={styles.modal__title}>{t(`mobile_page.${modalContent.modalLabel}`)}</span>
					<span className={styles.modal__subTitle}>{t(`mobile_page.${modalContent.modalTitle}`)}</span>
					<div className={styles.modal__imageContainer}>
						<Image className={styles.modal__image} src={modalContent.qrCode} width={250} height={250} alt="QR CODE" />
					</div>
					<span>
						{t('mobile_page.version')} {ios ? modalContent.iosVersion : modalContent.apkVersion} |{' '}
						{t('mobile_page.size')} {ios ? modalContent.iosSize : modalContent.apkSize}
					</span>
					<p>
						{t('mobile_page.support_for')} {ios ? IOS_SUPPORT : ANDROID_SUPPORT} {t('mobile_page.or_above')}
					</p>
					<Link
						href={INSTALLATION_GUIDE}
						target="_blank"
						className={classNames(styles.modal__mobileInstallGuide, {
							[styles['modal__mobileInstallGuide--ios']]: ios,
						})}
					>
						<span className={styles.modal__mobileInstallGuideText}>{t('mobile_page.how_to_install')}</span>
					</Link>
				</div>
			</QrCodeModal>
		);
	};

	return (
		<div className={styles.mobileDownloads}>
			{MOBILE_DOWNLOADS.map((item, i) => (
				<div key={item.label} className={styles.mobileDownloads__item}>
					<Image src={item.image} alt={item.label} width={110} height={110} className={styles.mobileDownloads__image} />
					<span>{t(`mobile_page.${item.label}`)}</span>
					<span>
						{t('mobile_page.size')}: {ios ? item.iosSize : item.apkSize}
					</span>
					<CustomButton
						large
						variant="yellowTransparent"
						text={t('mobile_page.download')}
						className={styles.mobileDownloads__button}
						onClick={() => handleOnClick(ios ? item.iosLink : item.apkLink, i)}
					/>
					{showQRModal && renderQrModal()}
				</div>
			))}
		</div>
	);
}

export default MobileDownloads;
