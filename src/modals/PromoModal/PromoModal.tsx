'use client';

import { range } from 'lodash-es';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

const PromoModal = ({ onClose }: { onClose: () => void }) => {
	const locale = useLocale();
	const t = useTranslations();
	const element = document.getElementById('modalRoot') as HTMLElement;

	useEffect(() => {
		document.body.classList.add('fixedContainer');
		return () => {
			document.body.classList.remove('fixedContainer');
		};
	}, []);

	const renderList = (rangeCount: number, startCount: number = 1) => {
		return (
			<>
				{range(rangeCount).map(itemIdx => {
					const itemCount = itemIdx + startCount;

					if (itemCount === 13) {
						return (
							<li key={itemCount} className={styles.modal__listItem}>
								{t(`promotions.modal_list_item${itemCount}.content1`)}
								<Link
									locale={locale}
									href="https://docs.google.com/forms/d/1rifpPENcFS4y-8ozWOM-aIcT9IhjmTF0KhLT0MY4pdc/viewform?edit_requested=true"
									target="_blank"
									className={styles.modal__greenTextLink}
								>
									{t(`promotions.modal_list_item${itemCount}.link`)}
								</Link>
								{t(`promotions.modal_list_item${itemCount}.content2`)}
							</li>
						);
					}

					if (itemCount === 15) {
						return (
							<li key={itemCount} className={styles.modal__listItem}>
								{t(`promotions.modal_list_item${itemCount}.content1`)}
								<Link
									locale={locale}
									href="/Promotions#welcome-bonus"
									target="_blank"
									className={styles.modal__greenTextLink}
								>
									{t(`promotions.modal_list_item${itemCount}.link.0`)}
								</Link>
								,{' '}
								<Link
									locale={locale}
									href="/Promotions#clubKoi-welcome-bonus"
									target="_blank"
									className={styles.modal__greenTextLink}
								>
									{t(`promotions.modal_list_item${itemCount}.link.1`)}
								</Link>
								,{' '}
								<Link
									locale={locale}
									href="/Promotions#firsttime-deposit-bonus"
									target="_blank"
									className={styles.modal__greenTextLink}
								>
									{t(`promotions.modal_list_item${itemCount}.link.2`)}
								</Link>
								,{' '}
								<Link
									locale={locale}
									href="/Promotions#reload-bonus"
									target="_blank"
									className={styles.modal__greenTextLink}
								>
									{t(`promotions.modal_list_item${itemCount}.link.3`)}
								</Link>
								{t(`promotions.modal_list_item${itemCount}.content2`)}
							</li>
						);
					}

					if (itemCount === 21) {
						return (
							<li key={itemCount} className={styles.modal__listItem}>
								{t(`promotions.modal_list_item${itemCount}.content1`)}
								<Link locale={locale} href="/Information/Terms" target="_blank" className={styles.modal__greenTextLink}>
									{t(`promotions.modal_list_item${itemCount}.link`)}
								</Link>
								{t(`promotions.modal_list_item${itemCount}.content2`)}
							</li>
						);
					}

					return (
						<li key={itemCount} className={styles.modal__listItem}>
							{t(`promotions.modal_list_item${itemCount}`)}
						</li>
					);
				})}
			</>
		);
	};

	const renderTable = () => {
		return (
			<table className={styles.modal__table}>
				<tbody className={styles.modal__tableBody}>
					<tr className={styles['modal__tableHead--borderTop']}>
						{range(5).map(headIdx => (
							<th key={headIdx + 1} className={styles.modal__tableHead}>
								{t(`promotions.modal_table.head${headIdx + 1}`)}
							</th>
						))}
					</tr>
					<tr>
						{range(5).map(dataIdx => {
							const dataCount = dataIdx + 1;
							let rowSpan = 1;

							if (dataCount === 1 || dataCount === 2 || dataCount === 5) rowSpan = 4;

							if (dataCount === 1) {
								return (
									<td key={dataCount} rowSpan={rowSpan} className={styles.modal__tableData}>
										{t(`promotions.modal_table.data${dataCount}.0`)}
										<br />
										{t(`promotions.modal_table.data${dataCount}.1`)}
										<br />
										{t(`promotions.modal_table.data${dataCount}.2`)}
									</td>
								);
							}

							return (
								<td key={dataCount} rowSpan={rowSpan} className={styles.modal__tableData}>
									{t(`promotions.modal_table.data${dataCount}`)}
								</td>
							);
						})}
					</tr>
					<tr>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data6')}</td>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data7')}</td>
					</tr>
					<tr>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data8')}</td>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data9')}</td>
					</tr>
					<tr>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data10')}</td>
						<td className={styles.modal__tableData}>{t('promotions.modal_table.data11')}</td>
					</tr>
				</tbody>
			</table>
		);
	};

	const modalContent = (
		<div className={styles.modalOverlay}>
			<div className={styles.modalWrapper}>
				<div className={styles.modal}>
					<div className={styles.modal__content}>
						<button className={styles.modal__closeButton} onClick={onClose}>
							x
						</button>
						<div className={styles.modal__banner}>
							<Image
								src="https://cdn.hanwei1234.com/Content/images/promo/promotnc-challenge-casino-promo-en2.jpg"
								alt="promo casino"
								fill
								className={styles.modal__bannerImage}
							/>
						</div>
						<div className={styles.modal__body}>
							<h5>{t('promotions.modal_title')}</h5>
							<p>{t('promotions.modal_description')}</p>
							<Link locale={locale} href="/Account/Register" target="_blank" className={styles.modal__bodyJoinNow}>
								{t('promotions.modal_join_now')}
							</Link>

							<ol className={styles.modal__listContainer}>{renderList(6)}</ol>
							<div className={styles.modal__tableContainer}>{renderTable()}</div>
							<ol className={styles.modal__listContainer} start={7}>
								{renderList(15, 7)}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, element);
};

export default PromoModal;
