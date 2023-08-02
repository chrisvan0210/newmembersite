import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

import { images } from '@/config/resources';

import styles from './page.module.scss';

const Login = () => {
	const t = useTranslations();
	const locale = useLocale();

	return (
		<div className="pageContainer">
			<div className={styles.login}>
				<div className={styles.login__topTitle}>
					<div className={styles.login__titleContainer}>
						<span className={styles.login__title}>{t('account.title')}</span>
					</div>
				</div>
				<div className={styles.login__content}>
					<div className={styles.login__formContainer}>
						<form className={styles.login__form}>
							<div className={styles.login__formHeader}>
								<Image src={images.account_lock_white} width={21} height={21} alt="lock white" />
								<h3 className={styles.login__formHeaderText}>{t('account.form_header_text')}</h3>
							</div>
							<div className={styles.login__formInputContainer}>
								<input
									type="text"
									className={styles.login__formControl}
									placeholder={t('account.form_placeholder_username')}
								/>
							</div>
							<div className={styles.login__formInputContainer}>
								<input
									type="password"
									className={styles.login__formControl}
									placeholder={t('account.form_placeholder_password')}
								/>
							</div>
							<button className={styles.login__formButton}>{t('account.form_login')}</button>
							<br />
							<Link locale={locale} href="/account/ForgotPassword" className={styles.login__formForgotPassword}>
								{t('account.form_forgot_password')}
							</Link>
						</form>
						<div className={styles.login__newRegContainer}>
							<Link locale={locale} href="/account/Register" className={styles.login__newRegister}>
								{t('account.form_new_register')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
