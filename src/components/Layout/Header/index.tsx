'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React, { useEffect, useRef, useState } from 'react';

import CustomButton from '@/components/CustomButton';
import DateTime from '@/components/DateTime';
import FontIcon from '@/components/FontIcon';
import MobileMenu from '@/components/Layout/Header/MobileMenu';
import type { Locale, Menu as MenuName } from '@/enums/app';
import { Menu } from '@/enums/app';
import useClickOutSide from '@/hooks/useClickOutSide';
import Sports365Modal from '@/modals/Sports365Modal';
import { setHeaderData } from '@/utils/app';

import styles from './index.module.scss';
import LiveChat from './LiveChat';
import LocaleSwitcher from './LocaleSwitcher';
import LoginPopup from './LoginPopup';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

function Header() {
	const t = useTranslations();
	const locale = useLocale();
	const headerData = setHeaderData(locale as Locale);
	const loginRef = useRef<HTMLDivElement>(null);
	const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [selectedNav, setSelectedNav] = useState<MenuName>(Menu.home);
	const clickOutSide = useClickOutSide(loginRef);
	const [showSports365, setShowSports365] = useState(false);

	useEffect(() => {
		if (clickOutSide) {
			// TODO
			setIsLoginPopupVisible(false);
		}
	}, [clickOutSide]);

	const handleIsHovered = (status: boolean) => setIsHovered(status);
	const handleSelectedNav = (navName: MenuName) => setSelectedNav(navName);
	const handleOpenModal = () => setShowSports365(true);
	const handleCloseModal = () => setShowSports365(false);

	return (
		<div className={styles.container}>
			<div className={styles.topNav}>
				<span className={styles.mobileMenu} onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}>
					&#8801;
				</span>
				{isMobileMenuVisible && <MobileMenu visible={isMobileMenuVisible} setVisible={setIsMobileMenuVisible} />}
				<div className={styles.dateTime}>
					<FontIcon name="notification_bell" size={16} />
					<DateTime />
				</div>
				<div className={styles.flexRow}>
					<LiveChat support={headerData.live_chat} />
					<LocaleSwitcher flag={headerData.flag} />
					<div className={styles.loginPopup} ref={loginRef}>
						<CustomButton
							className={styles.topNav__button}
							onClick={() => setIsLoginPopupVisible(!isLoginPopupVisible)}
						>
							<span className={styles.buttonLabel}>
								{t('header.login')}
								<FontIcon name="arrow_down" size={14} />
							</span>
							<FontIcon name="password" size={22} className={styles.buttonIcon} />
						</CustomButton>
						<LoginPopup visible={isLoginPopupVisible} />
					</div>

					<CustomButton variant="yellow" className={styles.topNav__button}>
						<span className={styles.buttonLabel}>{t('header.register')}</span>
						<FontIcon name="people" size={22} className={styles.buttonIcon} />
					</CustomButton>
				</div>
			</div>
			<div className={styles.bottomNav}>
				<Link locale={locale} href="/" className={styles.fb88logo}>
					<Image src={headerData.logo} width={178} height={62} alt="fb88 Logo" />
				</Link>
				<MainMenu handleIsHovered={handleIsHovered} handleSelectedNav={handleSelectedNav} />
			</div>
			<div
				className={classNames(styles.bottomSubNav, {
					[styles['bottomSubNav--hovered']]: !!isHovered,
				})}
			>
				<SubMenu handleIsHovered={handleIsHovered} selectedNav={selectedNav} onOpen={handleOpenModal} />
				{showSports365 && <Sports365Modal onClose={handleCloseModal} />}
			</div>
		</div>
	);
}

export default Header;
