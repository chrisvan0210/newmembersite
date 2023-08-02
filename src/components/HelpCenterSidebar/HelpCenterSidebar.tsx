/* eslint-disable no-restricted-globals */

'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import FontIcon from '@/components/FontIcon/FontIcon';
import { images } from '@/config/resources';
import { Locale, SupportType } from '@/enums/app';
import useChatSupport from '@/hooks/useChatSupport';
import QrCodeModal from '@/modals/QrCodeModal';
import type { SiteSupportData } from '@/types/app';
import { getSiteSupportByLang } from '@/utils/app';

import CustomButton from '../CustomButton';
import styles from './index.module.scss';

const HelpCenterSidebar = ({ hideOnSmall }: { hideOnSmall?: boolean }) => {
	const lang = useLocale() as Locale;
	const t = useTranslations();
	const { onChatClick } = useChatSupport();
	const { demo, support } = getSiteSupportByLang(lang);
	const [showQRModal, setShowQRModal] = useState(false);
	const [, , liveChat] = demo;

	const qrImage = lang === Locale.TH ? images.th_viber_qr_code : images.vn_viber_qr_code;
	const notCN = lang !== Locale.CN;

	const handleOnClick = (siteSupport: SiteSupportData) => {
		if (siteSupport.type === SupportType.VIBER) {
			setShowQRModal(true);
		}
		onChatClick(siteSupport);
	};

	const handleWaysToTransact = useCallback((typeOfTransaction: 'Deposit' | 'Withdraw') => {
		window.open(`/${lang}/Demo/${typeOfTransaction}`, '_blank');
	}, []);

	return (
		<div
			className={classNames(styles.helpCenterSidebar, styles[`helpCenterSidebar--${lang}Background`], {
				[styles[`helpCenterSidebar--forForbiddenPage`]]: hideOnSmall,
			})}
		>
			<section className={styles.helpCenterSidebar__slidingHelpCenterSection}>
				<div className={styles.helpCenterSidebar__topContent}>
					<div className={styles.helpCenterSidebar__iconFor247}>
						<FontIcon name="available_247" size={97} />
					</div>

					<CustomButton
						variant="yellow"
						text={t('help_center_sidebar.chat_now')}
						onClick={() => onChatClick(liveChat)}
						className={styles.helpCenterSidebar__chatNow}
					/>

					<div className={styles.helpCenterSidebar__waysToPay}>
						<Link
							href="#"
							className={styles.helpCenterSidebar__waysToPayIcons}
							onClick={() => handleWaysToTransact('Deposit')}
						>
							<FontIcon name="deposit" size={45} />
							{t('help_center_sidebar.how_to_deposit')}
							{notCN && <br />}
							{notCN && t('help_center_sidebar.deposit')}
						</Link>
						<Link
							href="#"
							className={styles.helpCenterSidebar__waysToPayIcons}
							onClick={() => handleWaysToTransact('Withdraw')}
						>
							<FontIcon name="withdraw" size={45} />
							{t('help_center_sidebar.how_to_withdraw')}
							{notCN && <br />}
							{notCN && t('help_center_sidebar.withdraw')}
						</Link>
					</div>
				</div>
				<div className={styles.helpCenterSidebar__customerService}>
					{support.map(item => (
						<div key={item.label}>
							<div className={styles.helpCenterSidebar__supportDetails} onClick={() => handleOnClick(item)}>
								<Image src={item.image!} alt={item.type} width={22} height={22} />
								<span
									className={classNames(styles.helpCenterSidebar__supportLabel, {
										[styles['helpCenterSidebar__supportLabel--cn']]: lang === Locale.CN,
									})}
								>
									{item.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
			{showQRModal && (
				<QrCodeModal onClose={() => setShowQRModal(false)}>
					<h4 className={styles.modalTitle}>{t('help_center_sidebar.qr_code_title')}</h4>
					<Image className={styles.modalImage} src={qrImage} width={250} height={250} alt="Viber QR Code" />
				</QrCodeModal>
			)}
		</div>
	);
};

export default HelpCenterSidebar;
