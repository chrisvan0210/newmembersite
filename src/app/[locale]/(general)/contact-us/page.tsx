'use client';

import { filter } from 'lodash-es';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

import CustomButton from '@/components/CustomButton';
import type { Option } from '@/components/DropDownMenu';
import DropDownMenu from '@/components/DropDownMenu';
import TextInput from '@/components/TextInput';
import { images } from '@/config/resources';
import { CONCERN_OPTIONS } from '@/constants/helpCenter';
import { Locale, SupportType } from '@/enums/app';
import useChatSupport from '@/hooks/useChatSupport';
import QrCodeModal from '@/modals/QrCodeModal';
import type { SiteSupportData } from '@/types/app';
import { getSiteSupportByLang } from '@/utils/app';

import styles from './page.module.scss';

function ContactUs() {
	const locale = useLocale();
	const t = useTranslations();
	const [formData, setFormData] = useState({ topic: '', username: '', email: '', message: '' });
	const siteSupport = getSiteSupportByLang(locale as Locale);
	const { onChatClick } = useChatSupport();
	const liveChat = siteSupport.demo[2];
	const [showQRModal, setShowQRModal] = useState(false);
	const qrImage = locale === Locale.TH ? images.th_viber_qr_code : images.vn_viber_qr_code;

	const [emailSupport, phoneSupport, otherSupport] = useMemo(
		(): Array<SiteSupportData[]> => [
			filter(siteSupport.support, { type: SupportType.EMAIL }),
			filter(siteSupport.support, { type: SupportType.PHONE }),
			filter(
				siteSupport.support,
				support => ![SupportType.PHONE, SupportType.EMAIL, SupportType.DEMO].includes(support.type),
			),
		],
		[siteSupport],
	);

	const handleTopicSelect = (selectedValue: Option) => {
		setFormData(prevFormData => ({ ...prevFormData, topic: selectedValue.label }));
	};

	const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target as HTMLInputElement;
		setFormData(prevFormData => ({ ...prevFormData, [id]: value }));
	};

	const handleClickChatSupport = (support: SiteSupportData) => {
		if (support.type === SupportType.VIBER) {
			setShowQRModal(true);
		}
		onChatClick(support);
	};

	const handleSubmit = () => {
		// TODO
	};

	const renderSupportRowList = (
		image: string,
		title: string,
		support: SiteSupportData[] | null,
		isLiveChat?: boolean,
	) => {
		return (
			<div className={styles.contactForm__supportRow}>
				<Image src={image} alt={image} width={74} height={74} className={styles.contactForm__supportImages} />
				<div className={styles.contactForm__supportDetails}>
					<span className={styles.contactForm__supportDetailsHeader}>{title}</span>
					{isLiveChat ? (
						<div>
							{t('contact.chat_desc')}
							<span className={styles.contactForm__liveChat} onClick={() => onChatClick(liveChat!)}>
								{t('contact.chat_now')}
							</span>
						</div>
					) : (
						<>
							{support!.map(item => (
								<span key={item.label} className={styles.yellow}>
									&#8226; {item.label}
								</span>
							))}
						</>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className="pageContainer">
			<div className={styles.contactUs}>
				<div className={styles.contactUs__contentContainer}>
					<span className={styles.contactUs__header}>{t('contact.header')}</span>
					<p className={styles.contactUs__content}>{t('contact.content')}</p>
				</div>
				<div className={styles.contactForm}>
					<form onSubmit={handleSubmit} className={styles.contactForm__form}>
						<span className={styles.contactForm__header}>{t('contact.send_message')}</span>

						<label htmlFor="topic" className={styles.contactForm__label}>
							{t('contact.would_like')}:
						</label>
						<DropDownMenu options={CONCERN_OPTIONS} onSelect={handleTopicSelect} />

						<TextInput
							label="username"
							title={`${t('contact.username')} :`}
							value={formData.username}
							onChange={e => handleChangeText(e)}
						/>

						<TextInput
							type="email"
							label="email"
							title={`${t('contact.email')} :`}
							value={formData.email}
							onChange={e => handleChangeText(e)}
						/>

						<TextInput
							rows={5}
							label="message"
							title={`${t('contact.message')} :`}
							value={formData.message}
							onChange={e => handleChangeText(e)}
						/>

						<CustomButton text={t('contact.send')} className={styles.contactForm__button} onClick={handleSubmit} />
					</form>

					<div className={styles.contactForm__support}>
						{renderSupportRowList(images.blue_chat, t('contact.chat'), null, true)}
						{renderSupportRowList(images.messages, t('contact.email'), emailSupport)}
						{renderSupportRowList(images.hotline, t('contact.telephone'), phoneSupport)}

						<div className={styles.contactForm__supportChats}>
							{otherSupport.map(support => (
								<Image
									key={support.label!}
									src={support.image!}
									width={40}
									height={40}
									alt={support.label!}
									onClick={() => handleClickChatSupport(support)}
								/>
							))}
						</div>
						{showQRModal && (
							<QrCodeModal onClose={() => setShowQRModal(false)}>
								<h4 className={styles.modalTitle}>{t('help_center_sidebar.qr_code_title')}</h4>
								<Image className={styles.modalImage} src={qrImage} width={250} height={250} alt="Viber Qr Code" />
							</QrCodeModal>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
