'use client';

import classNames from 'classnames';
import { includes } from 'lodash-es';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useRef, useState } from 'react';

import CustomButton from '@/components/CustomButton';
import { HEADER_INFO_LIST } from '@/constants/launchGame';
import { Locale } from '@/enums/app';
import SportsModal from '@/modals/SportsModal';

import LiveChat from '../Header/LiveChat';
import LocaleSwitcher from '../Header/LocaleSwitcher';
import styles from './index.module.scss';

interface ModalContent {
	header?: string;
	body?: string;
}

function LaunchGameHeader() {
	const t = useTranslations();
	const locale = useLocale() as Locale;
	const pathname = usePathname();
	const [showModal, setShowModal] = useState(false);
	const formRef = useRef(null);
	const [modalContent, setModalContent] = useState<ModalContent>({});
	const headerData = HEADER_INFO_LIST[locale];
	const isSports3 = includes(pathname, 'Sports3');

	const handleFormSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			username: { value: string };
			password: { value: string };
		};
		const username = target.username.value;
		const password = target.password.value;

		// TODO
		if (!username.trim() || !password.trim()) {
			setShowModal(true);
			setModalContent({
				header: 'Login Problem',
				body: `Invalid Username or Password. Please try again.`,
			});
		}
	};

	const handleLogin = () => {
		setShowModal(prevValue => !prevValue);
	};

	const renderInstruct = () => {
		if (locale === Locale.VN || locale === Locale.CN) {
			if (locale === Locale.CN && includes(pathname, 'Sports7')) return null;

			if (includes(pathname, 'Sports5') || isSports3) return null;

			return (
				<Link locale={locale} href={headerData.instruct_link} className={styles.header__instructLink}>
					<Image
						src={headerData.ball}
						width={18}
						height={18}
						alt={headerData.altInstruct}
						className={styles.header__instructImage}
					/>
					{t('launch_game_header.instruct')}
				</Link>
			);
		}

		return null;
	};

	return (
		<div className={classNames(styles.header, { [styles['header--sports3']]: isSports3 })}>
			<div className={styles.header__content}>
				<div className={styles.header__leftContent}>
					<Link locale={locale} href="/" className={styles.fb88logo}>
						<Image src={headerData.logo} width={142} height={36} alt={headerData.altLogo} />
					</Link>
				</div>
				<div className={styles.header__rightContent}>
					<div className={styles.header__leftSectionContent}>
						<LiveChat support={headerData.live_chat} />
						<div className={styles.header__localSwitcher}>
							<LocaleSwitcher flag={headerData.flag} />
						</div>
						{renderInstruct()}
					</div>
					<form ref={formRef} onSubmit={handleFormSubmit} className={styles.header__form}>
						<input
							type="text"
							placeholder={t(`launch_game_header.${headerData.username}`)}
							className={styles.header__input}
							name="username"
						/>
						<input
							type="password"
							placeholder={t(`launch_game_header.${headerData.password}`)}
							className={styles.header__input}
							name="password"
						/>
						<CustomButton className={styles.header__loginButton} onClick={handleLogin} type="submit">
							<span className={styles.header__buttonLabel}>{t('header.login')}</span>
						</CustomButton>

						<CustomButton className={classNames({ [styles.header__registerButton]: isSports3 })}>
							<Link locale={locale} href={headerData.register_link} className={styles.header__buttonLabel}>
								{t('header.register')}
							</Link>
						</CustomButton>
					</form>
				</div>
			</div>
			{showModal && <SportsModal onClose={handleLogin} content={modalContent} />}
		</div>
	);
}

export default LaunchGameHeader;
