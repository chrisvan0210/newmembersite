'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import TextInput from '@/components/TextInput';
import { images } from '@/config/resources';

import styles from './index.module.scss';

interface LoginPopupProps {
	visible: boolean;
}

const LoginPopup = ({ visible }: LoginPopupProps) => {
	const t = useTranslations();
	const [loginFormData, setLoginFormData] = useState({ username: '', password: '' });

	const handleChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target as HTMLInputElement;
		setLoginFormData(prevFormData => ({ ...prevFormData, [id]: value }));
	};

	const handleLogin = () => {
		// TODO
	};

	return (
		<div className={visible ? styles.display : styles.hide}>
			<span className={styles.arrowUp} />
			<div className={styles.login}>
				<p className={styles.yellow}>{t('header.login_to_account')}</p>
				<TextInput
					label="username"
					img={images.user}
					placeholder={t('header.username')}
					className={styles.login__input}
					value={loginFormData.username}
					onChange={e => handleChangeText(e)}
				/>
				<TextInput
					label="password"
					img={images.lock}
					placeholder={t('header.password')}
					className={styles.login__input}
					value={loginFormData.password}
					onChange={e => handleChangeText(e)}
				/>
				<CustomButton text={t('header.login')} className={styles.login__button} onClick={handleLogin} />
				<p>
					<Link href="/account/forgot_password" className={styles.yellow}>
						{t('header.forgot_password')}
					</Link>
					<br />
					{`${t('header.no_account')} `}
					<Link href="/account/register" className={styles.yellow}>
						{t('header.register_here')}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPopup;
