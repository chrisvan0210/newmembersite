'use client';

import classNames from 'classnames';
import { isArray } from 'lodash-es';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useEffect, useState } from 'react';

import FontIcon from '@/components/FontIcon';
import { PAYMENT_METHOD_LIST, PROMO_BONUS_CONTENT } from '@/constants/welcome';
import { Locale } from '@/enums/app';
import useChatSupport from '@/hooks/useChatSupport';
import type { SiteSupportData } from '@/types/app';
import { getSiteSupportByLang } from '@/utils/app';

import styles from './page.module.scss';

const Welcome = () => {
	const t = useTranslations();
	const locale = useLocale() as Locale;
	const { onChatClick } = useChatSupport();
	const { demo } = getSiteSupportByLang(locale);
	const liveChat = demo.pop() as SiteSupportData;
	const [dateTime, setDateTime] = useState('60:00');

	useEffect(() => {
		let timer = 60 * 60;
		let minutes;
		let seconds;

		const timerInterval = setInterval(() => {
			minutes = Math.floor(timer / 60);
			seconds = Math.floor(timer % 60);

			minutes = minutes < 10 ? `0${minutes}` : minutes;
			seconds = seconds < 10 ? `0${seconds}` : seconds;

			const countdown = `${minutes}:${seconds}`;

			setDateTime(countdown);

			timer -= 1;

			if (timer < 0) {
				clearInterval(timerInterval);
			}
		}, 1000);

		return () => {
			clearInterval(timerInterval);
		};
	}, []);

	const handleOnClick = () => {
		onChatClick(liveChat);
		return false;
	};

	const renderPromoBonus = () => {
		return (
			<>
				{PROMO_BONUS_CONTENT[locale].map((promo, idx) => (
					<div key={promo.alt} className={styles.welcome__promoBonus}>
						<Link locale={locale} href={promo.link} className={styles.welcome__promoLink}>
							<Image
								src={promo.image}
								alt={promo.alt}
								width={promo.width}
								height={promo.height}
								className={styles.welcome__promoImage}
							/>
						</Link>
						<div className={styles.welcome__bonusContent}>
							<span className={styles.welcome__bonusPercent}>{t(`account.promo_${promo.percent}`)}</span>
							<span className={styles.welcome__bonusTitle}>
								{!isArray(promo.title) ? (
									<span>{t(`account.promo_${promo.title}`)}</span>
								) : (
									<span>
										{t(`account.promo_${promo.title[0]}`)} <br /> {t(`account.promo_${promo.title[1]}`)}
									</span>
								)}
							</span>
							<span className={styles.welcome__bonusDescription}>
								{t(`account.promo_${promo.description}`)}
								{!!idx && <br />}
								<Link locale={locale} href="/Promotions" className={styles.welcome__yellowText}>
									{' '}
									{t(`account.promo_${promo.yellow_text}`)}
								</Link>
							</span>
						</div>
					</div>
				))}
			</>
		);
	};

	const renderIconLink = () => {
		return (
			<div className={styles.welcome__iconContainer}>
				{PAYMENT_METHOD_LIST[locale].map(payment => {
					if (payment.link === 'disabled') {
						return (
							<button key={payment.icon} className={styles.welcome__icon}>
								<FontIcon name={payment.icon} size={40} />
							</button>
						);
					}

					return (
						<Link key={payment.icon} href={payment.link} className={styles.welcome__icon}>
							<FontIcon name={payment.icon} size={40} />
						</Link>
					);
				})}
			</div>
		);
	};

	const renderTimerTopContent = () => {
		return (
			<div className={styles.welcome__timerTopContent}>
				<h2 className={styles.welcome__timerHeaderText}>{t('account.promo_timer_header_text')}</h2>
				<h3 className={styles.welcome__timerHeaderSubText}>
					{t('account.promo_timer_subheader_text1')}{' '}
					<span className={styles.welcome__yellowText}>{t('account.promo_timer_subheader_text2')} </span>{' '}
					{t('account.promo_timer_subheader_text3')}{' '}
					<span className={styles.welcome__yellowText}>{t('account.promo_timer_subheader_text4')} </span>
					<br />
					{t('account.promo_timer_subheader_text5')}{' '}
					<span className={styles.welcome__yellowText}>{t('account.promo_timer_subheader_text6')} </span>{' '}
					{t('account.promo_timer_subheader_text7')}{' '}
					<span className={styles.welcome__yellowText}>{t('account.promo_timer_subheader_text8')} </span>
				</h3>
			</div>
		);
	};

	const renderTimerMiddleContent = () => {
		return (
			<div className={styles.welcome__timerMiddleContent}>
				<div className={styles.welcome__timerBox}>
					<div className={styles.welcome__timerBoxTitle}>
						<span>{t('account.promo_timer_box_title1')}</span>
						<span>{t('account.promo_timer_box_title2')}</span>
					</div>
					<span>{dateTime}</span>
				</div>
			</div>
		);
	};

	const renderTimerBottomContent = () => {
		return (
			<div className={styles.welcome__timerBottomContent}>
				<Link
					locale={locale}
					href="/Payment/VerifyPhone"
					target="_blank"
					className={styles.welcome__textVerifyContainer}
				>
					<span className={styles.welcome__textVerify}>{t('account.promo_text_verify')}</span>

					<span className={styles.welcome__arrow}>
						<FontIcon name="running_arrow" size={23} className={styles.welcome__runningArrow} />
					</span>
				</Link>
				<div className={styles.welcome__checkButtons}>
					<span className={styles.welcome__checkButton1}>
						<strong className={styles.welcome__checkButtonText}>{t('account.promo_check_button_text1')}</strong>
					</span>
					<p className={styles.welcome__dashedLine} />
					<span className={styles.welcome__checkButton2}>
						<strong className={styles.welcome__checkButtonText}>{t('account.promo_check_button_text2')}</strong>
					</span>
				</div>
				<p className={styles.welcome__bottomParagraph}>{t('account.promo_bottom_paragraph')}</p>
			</div>
		);
	};

	const renderVietnamContent = () => {
		return (
			<div className={classNames(styles.welcome, styles['welcome--vietnam'])}>
				<div
					className={classNames(styles.welcome__headerTextContainer, styles['welcome__headerTextContainer--vietnam'])}
				>
					<h2 className={classNames(styles.welcome__headerTitle, styles['welcome__headerTitle--vietnam'])}>
						{t('account.promo_header_title')}
					</h2>
					<h3 className={classNames(styles.welcome__headerSubTitle, styles['welcome__headerSubTitle--vietnam'])}>
						{t('account.promo_header_subtitle')}
					</h3>
				</div>
				<div className={styles.welcome__timerBody}>
					{renderTimerTopContent()}
					{renderTimerMiddleContent()}
					{renderTimerBottomContent()}
				</div>
				<div className={classNames(styles.welcome__bottomContent, styles['welcome__bottomContent--vietnam'])}>
					<Link locale={locale} href="/Payment" target="_blank" className={styles.welcome__yellowButtonCountdown}>
						{t('account.promo_countdown_button_text1')}
					</Link>
					<Link locale={locale} href="#" onClick={handleOnClick} className={styles.welcome__yellowButtonCountdown}>
						{t('account.promo_countdown_button_text2')}
					</Link>
					<Link
						locale={locale}
						href="/Blog/fb88-nha-cai-ca-cuoc-bong-da-uy-tin-den-tu-chau-au"
						target="_blank"
						className={styles.welcome__yellowButtonCountdown}
					>
						{t('account.promo_countdown_button_text3')}
					</Link>
				</div>
			</div>
		);
	};

	const renderMainContent = () => {
		return (
			<div className={styles.welcome}>
				<div className={styles.welcome__headerTextContainer}>
					<div className={styles.welcome__headerTitle}>{t('account.promo_congratulations')}</div>
					<h4 className={styles.welcome__headerSubTitle}>{t('account.promo_registration_success')}</h4>
					{t('account.promo_welcome_registered')}
				</div>
				{renderPromoBonus()}
				<div className={styles.welcome__bottomContent}>
					<span className={styles.welcome__paymentMethod}>{t('account.promo_payment_methods')}</span>
					{renderIconLink()}
					<Link locale={locale} href="/Payment" className={styles.welcome__makeDepositNowButton}>
						{t('account.promo_make_deposit_now')}
					</Link>
				</div>
			</div>
		);
	};

	const renderWelcomeContent = () => {
		if (locale === Locale.VN) return renderVietnamContent();

		return renderMainContent();
	};

	return <div className="pageContainer">{renderWelcomeContent()}</div>;
};

export default Welcome;
