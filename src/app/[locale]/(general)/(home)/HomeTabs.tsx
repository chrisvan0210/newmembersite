import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { images } from '@/config/resources';
import { Locale, SupportType } from '@/enums/app';
import useChatSupport from '@/hooks/useChatSupport';
import QrCodeModal from '@/modals/QrCodeModal';
import type { SiteSupportData } from '@/types/app';
import { getHomeTabsContentByLang, getSiteSupportByLang } from '@/utils/app';

import styles from './HomeTabs.module.scss';

function HomeTabs() {
	const locale = useLocale();
	const t = useTranslations();
	const tabContent = getHomeTabsContentByLang(locale as Locale);
	const supportDetails = getSiteSupportByLang(locale as Locale);
	const { onChatClick } = useChatSupport();
	const tabs = [tabContent.tab1, tabContent.tab2, tabContent.tab3];
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [showQRModal, setShowQRModal] = useState(false);
	const qrImage = locale === Locale.TH ? images.th_viber_qr_code : images.vn_viber_qr_code;

	const handleChangeTab = (i: number) => {
		setActiveTab(tabs[i]);
		setActiveIndex(i);
	};

	const handleOnClick = (siteSupport: SiteSupportData) => {
		if (siteSupport.type === SupportType.VIBER) {
			setShowQRModal(true);
		}
		onChatClick(siteSupport);
	};

	const renderTabHeaders = () => {
		return (
			<>
				{tabContent.header.map((tab, i) => (
					<CustomButton
						key={tab.label}
						className={classNames(styles.tab__headerButton, {
							[styles['tab__headerButton--selected']]: activeTab === tabs[i],
						})}
						onClick={() => handleChangeTab(i)}
					>
						<FontIcon name={tab.icon} />
						{tab.label}
					</CustomButton>
				))}
			</>
		);
	};

	const renderSiteSupport = () => {
		return (
			<>
				<div className={styles.support}>
					{supportDetails.demo.map(item => (
						<div key={item.label} className={styles.support__item}>
							<Image
								key={item.label!}
								src={item.image!}
								alt={item.label!}
								width={130}
								height={130}
								onClick={() => onChatClick(item)}
								className={styles.support__image}
							/>
							<span className={styles.support__label}>{item.label}</span>
						</div>
					))}
				</div>
				<div className={styles.chat}>
					{supportDetails.support.map(item => (
						<div key={item.label} className={styles.chat__item}>
							<CustomButton
								large
								onClick={() => handleOnClick(item)}
								className={classNames(styles.chat__button, {
									[styles['chat__button--noChange']]: item.type === SupportType.PHONE,
								})}
							>
								<Image src={item.image!} width={36} height={36} alt={item.type} />
								<span className={styles.chat__label}>{item.label}</span>
							</CustomButton>
						</div>
					))}
				</div>
				{showQRModal && (
					<QrCodeModal onClose={() => setShowQRModal(false)}>
						<h4 className={styles.modalTitle}>{t('help_center_sidebar.qr_code_title')}</h4>
						<Image className={styles.modalImage} src={qrImage} width={250} height={250} alt="viber qr code" />
					</QrCodeModal>
				)}
				<p className={styles.chat__notice}>{t('home.live_chat_notice')}</p>
			</>
		);
	};

	const renderTabContent = () => {
		return (
			<>
				{activeIndex === 3 ? (
					renderSiteSupport()
				) : (
					<>
						{activeTab.map(blog => (
							<div key={blog.title} className={styles.blogItem}>
								<Link href={blog.link} target="_blank" className={styles.blogItem__image}>
									<Image src={blog.image} alt={blog.title} width={200} height={130} />
								</Link>
								<div className={styles.blogItem__info}>
									<div>
										<span className={styles.blogItem__title}>{blog.title}</span>
										<p className={styles.blogItem__description}>{blog.description}</p>
									</div>
									<Link href={blog.link} target="_blank" className={styles.blogItem__button}>
										<CustomButton small text={t('common.read_more')} />
									</Link>
								</div>
							</div>
						))}
					</>
				)}
				<Link href={tabContent.blog} target="_blank" className={styles.tab__contentLink}>
					<CustomButton large variant="yellowTransparent" text={t('common.more_news')} />
				</Link>
			</>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.tab}>{renderTabHeaders()}</div>
			<div className={styles.tab__content}>{renderTabContent()}</div>
		</div>
	);
}

export default HomeTabs;
