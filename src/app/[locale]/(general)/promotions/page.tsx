'use client';

import classNames from 'classnames';
import { range } from 'lodash-es';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import Announcement from '@/components/Announcement/Announcement';
import FontIcon from '@/components/FontIcon';
import MainSlider from '@/components/MainSlider';
import { PROMOTIONS_SLIDER } from '@/constants/sliders';
import { Locale } from '@/enums/app';
import AnnouncementModal from '@/modals/AnnouncementModal';
import PromoModal from '@/modals/PromoModal';

import styles from './page.module.scss';

const PANEL_NAVIGATION_NAME = [
	'all_promo',
	'new_member',
	'special',
	'sports',
	'casino',
	'slot',
	'lottery',
	'winners',
] as const;

type PanelNavigation = (typeof PANEL_NAVIGATION_NAME)[number];

const ICON_NAME = [
	'all_promo',
	'promo_new',
	'promo_specials',
	'promo_sports',
	'promo_casino',
	'promo_slot',
	'promo_lottery',
	'promo_winners',
] as const;

const GRID_BY_NAV_NAME: Record<PanelNavigation, number> = {
	all_promo: 15,
	new_member: 5,
	special: 2,
	sports: 6,
	casino: 2,
	slot: 1,
	lottery: 1,
	winners: 0,
};

function Promotions() {
	const locale = useLocale();
	const t = useTranslations();
	const [active, setActive] = useState<PanelNavigation>(PANEL_NAVIGATION_NAME[0]);
	const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
	const [showPromoModal, setShowPromoModal] = useState(false);

	const handleShowAnnouncementModal = () => {
		setShowAnnouncementModal(preValue => !preValue);
	};

	const handleShowPromoModal = () => {
		setShowPromoModal(prevValue => !prevValue);
	};

	const handleNavClick = (navName: PanelNavigation) => {
		if (navName === PANEL_NAVIGATION_NAME[7]) window.open(`/winners/fishermen`, '_blank');
		setActive(navName);
	};

	const renderAnnouncement = () => {
		let announcementTotal = 5;
		if (locale === Locale.TH) announcementTotal = 6;
		if (locale === Locale.VN) announcementTotal = 7;

		const announcements = range(announcementTotal).map((_announcement, index) =>
			t(`promotions.announcement${index + 1}`),
		);

		return <Announcement handleShowAnnouncementModal={handleShowAnnouncementModal} announcements={announcements} />;
	};

	const renderNav = () => {
		return (
			<ul className={styles.promotions__panelNavContainer}>
				{PANEL_NAVIGATION_NAME.map((navName, idx) => {
					if (locale === Locale.CN && navName === PANEL_NAVIGATION_NAME[2]) {
						return false;
					}

					return (
						<li key={navName} className={styles.promotions__panelNavList}>
							<button
								className={classNames(styles.promotions__panelNavButton, {
									[styles['promotions__panelNavButton--active']]: active === navName,
								})}
								onClick={() => handleNavClick(navName)}
							>
								<FontIcon name={ICON_NAME[idx]} size={17} className={styles.promotions__panelNavIcon} />
								{t(`promotions.${navName}`)}
							</button>
						</li>
					);
				})}
			</ul>
		);
	};

	const renderGridList = () => {
		const gridCount = GRID_BY_NAV_NAME[active];

		return (
			<>
				{range(gridCount).map(listCount => (
					<div key={listCount + 1} className={styles.promotions__list}>
						<div className={styles.promotions__listBgEffect} />
						<Link href="#challenge-casino" className={styles.promotions__imageLink} onClick={handleShowPromoModal}>
							<Image
								src="https://cdn.hanwei1234.com/Content/images/promo/promothumb-challenge-casino-promo-en2.jpg"
								alt="fb88"
								fill
								className={styles.promotions__image}
							/>
						</Link>
						<Link
							href="#challenge-casino"
							className={styles.promotions__moreDetailsButton}
							onClick={handleShowPromoModal}
						>
							{t('promotions.more_details')}
						</Link>
					</div>
				))}
			</>
		);
	};

	const renderTermsList = () => {
		return (
			<ol className={styles.promotions__termsOrderList}>
				{range(7).map(listIdx => (
					<li key={listIdx + 1} className={styles.promotions__termsList}>
						{t(`promotions.terms_and_conditions${listIdx + 1}`)}
					</li>
				))}
			</ol>
		);
	};

	return (
		<div className="pageContainer">
			<MainSlider slides={PROMOTIONS_SLIDER} />
			<div className={styles.promotions}>
				<div className={styles.promotions__container}>
					<div className={styles.promotions__panel}>
						{renderAnnouncement()}
						<div className={styles.promotions__panelPromoNav}>{renderNav()}</div>
					</div>
					<div className={styles.promotions__promoList}>{renderGridList()}</div>
					<div className={styles.promotions__promoTerms}>
						<div className={styles.promotions__promoTermsContent}>
							<strong className={styles.promotions__termsContentHeader}>{t('promotions.terms_and_conditions')}</strong>
							{renderTermsList()}
						</div>
					</div>
					<div className={styles.promotions__promoModal} />
					{showAnnouncementModal && <AnnouncementModal onClose={handleShowAnnouncementModal} />}
					{showPromoModal && <PromoModal onClose={handleShowPromoModal} />}
				</div>
			</div>
		</div>
	);
}

export default Promotions;
