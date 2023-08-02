'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { images } from '@/config/resources';
import { FORBIDDEN_ACCESS_WARNING } from '@/constants/forbidden';
import type { Locale } from '@/enums/app';
import { SupportType } from '@/enums/app';
import useChatSupport from '@/hooks/useChatSupport';
import QrCodeModal from '@/modals/QrCodeModal';
import { getSiteSupportByLang } from '@/utils/app';

import styles from './page.module.scss';

function Forbidden() {
	const locale = useLocale();
	const supportDetails = getSiteSupportByLang(locale as Locale);
	const [showSupportModal, setShowSupportModal] = useState(false);
	const { onChatClick } = useChatSupport();
	const filteredSupport = supportDetails.support.filter(
		support => ![SupportType.PHONE, SupportType.EMAIL, SupportType.VIBER, SupportType.DEMO].includes(support.type),
	);

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.header__content}>
					<Image src={images.fb88_fair_games} width={220} height={78} alt="Fb88" />
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body__content}>
					<Image src={images.stop_hand} width={215} height={250} alt="Stop" className={styles.body__stop} />
					{FORBIDDEN_ACCESS_WARNING.map(warning => (
						<div key={warning.greeting} className={styles.body__message}>
							<span className={styles.body__messageHeader}>
								<Image src={warning.flag} width={30} height={20} alt="Flag" className={styles.body__flag} />
								{warning.greeting}
							</span>
							{warning.message_p1} {warning.liveChat} {warning.message_p2}{' '}
							<span className={styles.greenText} onClick={() => onChatClick(warning.useEmail)}>
								{warning.email}
							</span>{' '}
							{warning.message_p3}{' '}
							<span className={styles.greenText} onClick={() => onChatClick(warning.useSkype)}>
								{warning.skype}
							</span>{' '}
							{warning.message_p4}
							<div className={styles.body__messageFooter}>
								<span className={styles.body__messageClosing}>{warning.closing}</span>
								<CustomButton
									text={warning.liveChat}
									className={styles.body__liveChatButton}
									onClick={() => onChatClick(warning.useLiveChat)}
								/>
							</div>
						</div>
					))}
				</div>
				<div className={styles.support}>
					<div className={styles.support__chatContainer} onClick={() => setShowSupportModal(true)}>
						<FontIcon name="help_center" size={60} color="var(--color-broom)" className={styles.support__icon} />
						<div className={styles.support__redBackdrop} />
						<FontIcon
							name="help_center"
							size={66}
							color="var(--color-dusty-gray)"
							className={styles.support__iconShadow}
						/>
					</div>
					<div>
						{showSupportModal && (
							<QrCodeModal onClose={() => setShowSupportModal(false)}>
								<div className={styles.modalContent}>
									<div className={styles.modalContent__demoContainer}>
										{supportDetails.demo.map(item => (
											<div key={item.label} className={styles.modalContent__demoItem}>
												<Image
													key={item.label!}
													src={item.image!}
													alt={item.label!}
													width={100}
													height={100}
													onClick={() => onChatClick(item)}
													className={styles.modalContent__demoImage}
												/>
												<span className={styles.modalContent__demoLabel}>{item.label}</span>
											</div>
										))}
									</div>
									<div className={styles.modalContent__chatContainer}>
										{filteredSupport.map(support => (
											<Image
												key={support.label!}
												src={support.image!}
												width={72}
												height={72}
												alt={support.label!}
												onClick={() => onChatClick(support)}
												className={styles.modalContent__chatImage}
											/>
										))}
									</div>
								</div>
							</QrCodeModal>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forbidden;
