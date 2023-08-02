'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { images } from '@/config/resources';
import { PARTNERS, SITE_INFO, SPORTS_LOGOS, VN_SITE_INFO, WEB_BROWSERS } from '@/constants/footer';
import { Locale } from '@/enums/app';

import styles from './index.module.scss';
import PaymentInfo from './PaymentInfo';

const Footer = () => {
	const t = useTranslations();
	const locale = useLocale();

	const handleSwitchMobile = () => {
		// TODO: Switch to mobile view func
	};

	const renderSiteInfo = () => {
		const sites = locale === Locale.VN ? VN_SITE_INFO : SITE_INFO;
		return (
			<>
				<label htmlFor="information">{t('common.information')}</label>
				<div className={styles.information__container}>
					<div className={styles.infoLeft}>
						{sites.slice(0, 5).map(info => (
							<Link
								key={info.label}
								href={info.link}
								locale={locale}
								target="_blank"
								rel="noreferrer"
								className={styles.leftItem}
							>
								{t(`common.${info.label}`)}
							</Link>
						))}
					</div>
					<div className={styles.infoRight}>
						{sites.slice(5).map(info => (
							<Link
								key={info.label}
								href={info.link}
								locale={locale}
								target="_blank"
								rel="noreferrer"
								className={styles.rightItem}
							>
								{t(`common.${info.label}`)}
							</Link>
						))}
					</div>
				</div>
			</>
		);
	};

	const renderPartners = () => {
		return (
			<>
				<div>
					<label htmlFor="official_partner">{t('common.official_partner')}</label>
					<div className={styles.partner__logo}>
						<Link href="/sponsor" target="_blank">
							<Image src={images.fsv_mainz} alt="FSV Mainz" width={120} height={90} className={styles.partner__item} />
						</Link>
					</div>
				</div>
				<div className={styles.partner__bottom}>
					<label htmlFor="powered_by">{t('common.powered_by')}</label>
					<div className={styles.partner__logo2}>
						{PARTNERS.map(partner => (
							<FontIcon key={partner} name={partner} size={100} className={styles.partner__item} />
						))}
					</div>
				</div>
			</>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.container__top}>
				<div className={styles.mainContents}>
					<div className={styles.description}>
						<div className={styles.description__img}>
							<Image src={images.fb88_no_tagline} alt="fb88 logo" width={200} height={55} />
						</div>
						<p>{t('footer.introduction')}</p>
						<div className={styles.description__browser}>
							{WEB_BROWSERS.map(browser => (
								<Link
									key={browser.label}
									href={browser.link}
									target="_blank"
									rel="noreferrer"
									aria-label={browser.label}
								>
									<FontIcon name={browser.icon} size={30} />
								</Link>
							))}
						</div>
					</div>
					<div className={styles.information}>{renderSiteInfo()}</div>
					<div className={styles.payment}>
						<PaymentInfo locale={locale as Locale} />
					</div>
					<div className={styles.partner}>{renderPartners()}</div>
				</div>
				<CustomButton
					large
					variant="yellowTransparent"
					text={t('common.switch_to_mobile')}
					onClick={handleSwitchMobile}
					className={styles.btnSwitchMobile}
				/>
				<div className={styles.sportsLogos}>
					{SPORTS_LOGOS.map(logo => (
						<Image src={logo} alt={logo} width={106} height={55} className={styles.sportsLogos__image} key={logo} />
					))}
				</div>
			</div>
			<div className={styles.container__bottom}>
				&#169; {new Date().getFullYear()} FB88.com {t('footer.all_rights_reserved')} | 18+
			</div>
		</div>
	);
};
export default Footer;
