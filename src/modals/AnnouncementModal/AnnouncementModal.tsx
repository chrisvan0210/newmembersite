'use client';

import classNames from 'classnames';
import { range } from 'lodash-es';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Locale } from '@/enums/app';

import styles from './index.module.scss';

const MODAL_TAB_NAME = ['general', 'betting', 'promotion', 'maintenance', 'payment_related'] as const;

type TabType = (typeof MODAL_TAB_NAME)[number];

const AnnouncementModal = ({ onClose }: { onClose: () => void }) => {
	const locale = useLocale();
	const t = useTranslations();
	const [activeTab, setActiveTab] = useState<TabType>(MODAL_TAB_NAME[0]);
	const element = document.getElementById('modalRoot') as HTMLElement;

	useEffect(() => {
		document.body.classList.add('fixedContainer');
		return () => {
			document.body.classList.remove('fixedContainer');
		};
	}, []);

	const handleTabClick = (tabName: TabType) => {
		setActiveTab(tabName);
	};

	const renderTabHead = () => {
		return (
			<ul className={styles.modal__tabHead}>
				{MODAL_TAB_NAME.map(tabName => (
					<li key={tabName} className={styles.modal__tabList}>
						<button
							onClick={() => handleTabClick(tabName)}
							className={classNames(styles.modal__tab, {
								[styles['modal__tab--active']]: activeTab === tabName,
							})}
						>
							{t(`promotions.modal_${tabName}`)}
						</button>
					</li>
				))}
			</ul>
		);
	};

	const renderGeneralTab = () => {
		const rangeCount = 1;

		if (locale === Locale.VN) {
			return (
				<>
					{range(rangeCount).map(promotionIdx => {
						const key = MODAL_TAB_NAME[0] + promotionIdx;

						return (
							<div key={key} className={classNames(styles.modal__bodyContent, styles[`modal__bodyContent--pink`])}>
								<strong>{t(`promotions.modal_general_content.${promotionIdx}.date`)}</strong>
								<br />
								{t(`promotions.modal_general_content.${promotionIdx}.description`)}
							</div>
						);
					})}
				</>
			);
		}

		return null;
	};

	const renderMaintenanceTab = () => {
		const rangeCount = locale === Locale.TH || locale === Locale.VN ? 5 : 4;

		return (
			<>
				{range(rangeCount).map(promotionIdx => {
					const key = MODAL_TAB_NAME[3] + promotionIdx;

					return (
						<div
							key={key}
							className={classNames(styles.modal__bodyContent, styles[`modal__bodyContent--pink`], {
								[styles[`modal__bodyContent--yellow`]]: promotionIdx === rangeCount - 1,
							})}
						>
							<strong>{t(`promotions.modal_maintenance_content.${promotionIdx}.date`)}</strong>
							<br />
							{t(`promotions.modal_maintenance_content.${promotionIdx}.description`)}
						</div>
					);
				})}
			</>
		);
	};

	const renderPaymentRelated = () => {
		const rangeCount = 1;

		if (locale === Locale.EN) return null;

		return (
			<>
				{range(rangeCount).map(promotionIdx => {
					const key = MODAL_TAB_NAME[4] + promotionIdx;

					return (
						<div key={key} className={classNames(styles.modal__bodyContent, styles[`modal__bodyContent--pink`])}>
							<strong>{t(`promotions.modal_payment_related_content.${promotionIdx}.date`)}</strong>
							<br />
							{t(`promotions.modal_payment_related_content.${promotionIdx}.description`)}
						</div>
					);
				})}
			</>
		);
	};

	const renderContent = () => {
		switch (activeTab) {
			case 'general':
				return renderGeneralTab();
			case 'maintenance':
				return renderMaintenanceTab();
			case 'payment_related':
				return renderPaymentRelated();

			default:
				return null;
		}
	};

	const modalContent = (
		<div className={styles.modalOverlay}>
			<div className={styles.modalWrapper}>
				<div className={styles.modal}>
					<div className={styles.modal__dialog}>
						<div className={styles.modal__content}>
							<button className={styles.modal__closeButton} onClick={onClose}>
								x
							</button>
							<div className={styles.modal__body}>
								{renderTabHead()}
								<div className={styles.modal__tabBody}>{renderContent()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, element);
};

export default AnnouncementModal;
