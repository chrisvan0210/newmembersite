'use client';

import '@/styles/main.scss';

import classNames from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import styles from './SubFooter.module.scss';

function SubFooter() {
	const locale = useLocale();
	const t = useTranslations();

	return (
		<div className={styles.subFooter}>
			<section className={classNames(styles.subFooter__information, styles.subFooterItemWidth)}>
				<div className={styles.subFooter__title}>{t('sub_footer.information')}</div>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/account/Register">
						{t('sub_footer.registration_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.registration_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="https://www.fb88affok.com">
						{t('sub_footer.affiliates_title')}
					</Link>
				</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.affiliates_content')}</p>
				<div className={styles.subFooter__subTitle}>{t('sub_footer.resposible_gaming_title')}</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.resposible_gaming_content')}</p>
				<div className={styles.subFooter__subTitle}>{t('sub_footer.security_title')}</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.security_content')}</p>
			</section>
			<section className={classNames(styles.subFooter__products, styles.subFooterItemWidth)}>
				<div className={styles.subFooter__title}>{t('sub_footer.products')}</div>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/">
						{t('sub_footer.sports_betting_and_live_betting_title')}
					</Link>
				</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.sports_betting_and_live_betting_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/games">
						{t('sub_footer.online_casino_title')}
					</Link>
				</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.online_casino_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/casinoclub">
						{t('sub_footer.live_casino_title')}
					</Link>
				</div>{' '}
				<p className={styles.subFooter__content}>{t('sub_footer.live_casino_content')}</p>
			</section>
			<section className={classNames(styles.subFooter__infoCenter, styles.subFooterItemWidth)}>
				<div className={styles.subFooter__title}>{t('sub_footer.info_center')}</div>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/promotions">
						{t('sub_footer.promotions_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.promotions_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/information/FAQAccount">
						{t('sub_footer.help_centre_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.help_centre_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/payment">
						{t('sub_footer.payment_methods_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.payment_methods_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/contact-us">
						{t('sub_footer.contact_us_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.contact_us_content')}</p>
			</section>
			<section className={classNames(styles.subFooter__bettingInfo, styles.subFooterItemWidth)}>
				<div className={styles.subFooter__title}>{t('sub_footer.betting_info')}</div>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/">
						{t('sub_footer.sports_results_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.sports_results_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/information/RulesLive">
						{t('sub_footer.betting_statistics_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.betting_statistics_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/information/RulesSports">
						{t('sub_footer.sports_betting_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.sports_betting_content')}</p>
				<div className={styles.subFooter__subTitle}>
					<Link locale={locale} href="/casinoclub">
						{t('sub_footer.casino_betting_title')}
					</Link>
				</div>
				<p className={styles.subFooter__content}>{t('sub_footer.casino_betting_content')}</p>
			</section>
		</div>
	);
}

export default SubFooter;
