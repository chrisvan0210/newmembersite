'use client';

import classNames from 'classnames';
import { debounce, find } from 'lodash-es';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import FontIcon from '@/components/FontIcon';
import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';

type NavType = 'sports3' | 'sports5' | 'sports7' | 'sports247' | 'mobile';

const SPORTS3_OFFSETS = [0, 850];
const SPORTS5_OFFSETS = [850, 1700];
const SPORTS7_OFFSETS = [1700, 2500];
const SPORTS247_OFFSETS = [2500, 3400];
const MOBILE_OFFSETS = [3400, Infinity];

const scrollPositions: Array<{ offsets: number[]; type: NavType }> = [
	{ offsets: SPORTS3_OFFSETS, type: 'sports3' },
	{ offsets: SPORTS5_OFFSETS, type: 'sports5' },
	{ offsets: SPORTS7_OFFSETS, type: 'sports7' },
	{ offsets: SPORTS247_OFFSETS, type: 'sports247' },
	{ offsets: MOBILE_OFFSETS, type: 'mobile' },
];

function SportsBook() {
	const lang = useLocale();
	const t = useTranslations();
	const [selectedNav, setSelectedNav] = useState<NavType>(scrollPositions[0].type);

	useEffect(() => {
		const handleScroll = debounce(() => {
			const { scrollY } = window;
			const offsetInfo = find(scrollPositions, ({ offsets }) => scrollY >= offsets[0] && scrollY < offsets[1])!;
			setSelectedNav(offsetInfo?.type);
		}, 300);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScrollToContent = (scrollY: number) => {
		window.scrollTo(0, scrollY);
	};

	const renderSports3Game = () => {
		return (
			<div className={styles.sportsBook__3game}>
				<div className={styles.sportsBook__3gameContent}>
					<div className={styles.sportsBook__3gameContentContainer}>
						<div className={styles.sportsBook__3gamePageLogo}>
							<Image src={images.sports_book_sports3} width={392} height={46} alt="sports 3" />
							<div className={styles.sportsBook__3gamePageContent}>
								<h4 className={styles.sportsBook__3gameHeaderTitle}>{t('sports.sports3_header')}</h4>
								<div className={styles.sportsBook__3gameSportsContent}>
									<ul className={styles.sportsBook__3gameSportsContentList}>
										<li className={styles.sportsBook__3gameContentList}>
											<p className={styles.sportsBook__3gameContentListTitle}>{t('sports.sports3_list_edit_title')}</p>
											{t('sports.sports3_list_edit_description')}
										</li>
										<li className={styles.sportsBook__3gameContentList}>
											<p className={styles.sportsBook__3gameContentListTitle}>{t('sports.sports3_list_multi_title')}</p>
											{t('sports.sports3_list_multi_description')}
										</li>
										<li className={styles.sportsBook__3gameContentList}>
											<p className={styles.sportsBook__3gameContentListTitle}>{t('sports.sports3_list_quick_title')}</p>
											{t('sports.sports3_list_quick_description')}
										</li>
										<li className={styles.sportsBook__3gameContentList}>
											<p className={styles.sportsBook__3gameContentListTitle}>
												{t('sports.sports3_list_cash_out_title')}
											</p>
											{t('sports.sports3_list_cash_out_description')}
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.sportsBook__3gameButtonPlayNow}>
							<Link
								href="/en-US/Sportsbook/Sports3"
								target="_blank"
								className={styles.sportsBook__3gameButtonBlackSports}
							>
								{t('sports.sports3_play_now')}
							</Link>
						</div>
						<div className={styles.sportsBook__3gameShowOnMobile} />
					</div>
				</div>
			</div>
		);
	};

	const renderSports5Game = () => {
		return (
			<div className={styles.sportsBook__5game}>
				<div className={styles.sportsBook__5gameContent}>
					<div className={styles.sportsBook__5gameContentContainer}>
						<div className={styles.sportsBook__5gamePageLogo}>
							<Image src={images.sports_book_sports5} width={355} height={46} alt="sports 5" />
							<div className={styles.sportsBook__5gamePageContent}>
								<h4 className={styles.sportsBook__5gameHeaderTitle}>{t('sports.sports5_header')}</h4>
								<div className={styles.sportsBook__5gameSportsContent}>
									<ul className={styles.sportsBook__5gameSportsContentList}>
										<li className={styles.sportsBook__5gameContentList}>{t('sports.sports5_list1')}</li>
										<li className={styles.sportsBook__5gameContentList}>{t('sports.sports5_list2')}</li>
										<li className={styles.sportsBook__5gameContentList}>{t('sports.sports5_list3')}</li>
										<li className={styles.sportsBook__5gameContentList}>{t('sports.sports5_list4')}</li>
										{lang === Locale.CN ||
											(lang === Locale.TH && (
												<li className={styles.sportsBook__5gameContentList}>{t('sports.sports5_list5')}</li>
											))}
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.sportsBook__5gameButtonPlayNow}>
							<Link href="/en-US/Sportsbook/Sports5" target="_blank" className={styles.sportsBook__5gameButtonEuro}>
								{t('sports.sports5_euro_view')}
							</Link>
							<Link
								href="/en-US/Sportsbook/Sports5?view=asian"
								target="_blank"
								className={styles.sportsBook__5gameButtonAsian}
							>
								{t('sports.sports5_asian_view')}
							</Link>
						</div>
						<div className={styles.sportsBook__5gameShowOnMobile} />
					</div>
				</div>
			</div>
		);
	};

	const renderSports7Game = () => {
		return (
			<div className={styles.sportsBook__7game}>
				<div className={styles.sportsBook__7gameContent}>
					<div className={styles.sportsBook__7gameContentContainer}>
						<div className={styles.sportsBook__7gamePageLogo}>
							<Image src={images.sports_book_sports7} width={343} height={46} alt="sports 7" />
							<div className={styles.sportsBook__7gamePageContent}>
								<h4 className={styles.sportsBook__7gameHeaderTitle}>{t('sports.sports7_header')}</h4>
								<div className={styles.sportsBook__7gameSportsContent}>
									<ul className={styles.sportsBook__7gameSportsContentList}>
										<li className={styles.sportsBook__7gameContentList}>{t('sports.sports7_list1')}</li>
										<li className={styles.sportsBook__7gameContentList}>{t('sports.sports7_list2')}</li>
										<li className={styles.sportsBook__7gameContentList}>{t('sports.sports7_list3')}</li>
										<li className={styles.sportsBook__7gameContentList}>{t('sports.sports7_list4')}</li>
										{lang === Locale.EN ||
											(lang === Locale.VN && (
												<li className={styles.sportsBook__7gameContentList}>{t('sports.sports7_list5')}</li>
											))}
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.sportsBook__7gameButtonPlayNow}>
							<Link
								href="/en-US/Sportsbook/SportsX"
								target="_blank"
								className={styles.sportsBook__7gameButtonGreenSports}
							>
								{t('sports.sports7_play_now')}
							</Link>
						</div>
						<div className={styles.sportsBook__7gameShowOnMobile} />
					</div>
				</div>
			</div>
		);
	};

	const renderSports247Game = () => {
		return (
			<div className={styles.sportsBook__247game}>
				<div className={styles.sportsBook__247gameContent}>
					<div className={styles.sportsBook__247gameContentContainer}>
						<div className={styles.sportsBook__247gamePageLogo}>
							<div className={styles.sportsBook__sports247Image} />
							<div className={styles.sportsBook__247gamePageContent}>
								<div className={styles.sportsBook__247gameSportsContent}>{t('sports.sports247_sub_header')}</div>
								<h4 className={styles.sportsBook__247gameHeaderTitle}>{t('sports.sports247_header')}</h4>
							</div>
						</div>
						<div className={styles.sportsBook__247gameButtonPlayNow}>
							<Link
								href="/en-US/Sportsbook/Sports247"
								target="_blank"
								className={styles.sportsBook__247gameButtonGreenSports}
							>
								{t('sports.sports247_play_now')}
							</Link>
						</div>
						<div className={styles.sportsBook__sports247Device}>
							<Image src={images.sports_book_sports247_device} width={635} height={330} alt="sports247 device" />
						</div>
						<div className={styles.sportsBook__247gameShowOnMobile} />
					</div>
				</div>
			</div>
		);
	};

	const renderFb88App = () => {
		return (
			<div className={styles.sportsBook__fb88App}>
				<div className={styles.sportsBook__fb88AppContent}>
					<div className={styles.sportsBook__fb88AppContentContainer}>
						<div className={styles.sportsBook__fb88AppPageContent}>{t('sports.sports_mobile_header')}</div>
						<div className={styles.sportsBook__fb88AppDownloadButtons}>
							<div className={styles.sportsBook__fb88MainApp}>
								<Image alt="fb88 main app" src={images.sports_book_main_app} width={140} height={140} />
								<span>{t('sports.sports_mobile_download_main_app')}</span>

								<Link href="/en-US/Mobile" target="_blank" className={styles.sportsBook__fb88IosButton}>
									{t('sports.sports_mobile_how_to_install')}
								</Link>
							</div>
							<div className={styles.sportsBook__fb88SportsApp}>
								<Image alt="fb88 sports app" src={images.sports_book_sports_app} width={140} height={140} />
								<span>{t('sports.sports_mobile_download_sports_app')}</span>
								<Link href="/en-US/Mobile" target="_blank" className={styles.sportsBook__fb88AndroidButton}>
									{t('sports.sports_mobile_how_to_install')}
								</Link>
							</div>
						</div>
						<div className={styles.sportsBook__fb88AppShowOnMobile} />
					</div>
				</div>
			</div>
		);
	};

	const renderNavButtonSlide = () => {
		return (
			<div className={styles.sportsBook__navButtonSlide}>
				<div
					className={classNames(styles.sportsBook__navLike, {
						[styles['sportsBook__navLike--selectedNav']]: selectedNav === 'sports3',
					})}
					onClick={() => handleScrollToContent(SPORTS3_OFFSETS[0])}
				>
					<FontIcon name="sports_3" size={30} />
				</div>
				<div
					className={classNames(styles.sportsBook__navLike, {
						[styles['sportsBook__navLike--selectedNav']]: selectedNav === 'sports5',
					})}
					onClick={() => handleScrollToContent(SPORTS5_OFFSETS[0])}
				>
					<FontIcon name="sports_5" size={30} />
				</div>
				<div
					className={classNames(styles.sportsBook__navLike, {
						[styles['sportsBook__navLike--selectedNav']]: selectedNav === 'sports7',
					})}
					onClick={() => handleScrollToContent(SPORTS7_OFFSETS[0])}
				>
					<FontIcon name="seven" size={35} />
				</div>
				<div
					className={classNames(styles.sportsBook__navLike, {
						[styles['sportsBook__navLike--selectedNav']]: selectedNav === 'sports247',
					})}
					onClick={() => handleScrollToContent(SPORTS247_OFFSETS[0])}
				>
					<FontIcon name="sports_247" size={35} />
				</div>
				<div
					className={classNames(styles.sportsBook__navLike, {
						[styles['sportsBook__navLike--selectedNav']]: selectedNav === 'mobile',
					})}
					onClick={() => handleScrollToContent(MOBILE_OFFSETS[0])}
				>
					<FontIcon name="mobile" size={35} />
				</div>
			</div>
		);
	};

	return (
		<div className="pageContainer">
			<div className={styles.sportsBook}>
				{renderNavButtonSlide()}
				{renderSports3Game()}
				{renderSports5Game()}
				{renderSports7Game()}
				{renderSports247Game()}
				{renderFb88App()}
			</div>
		</div>
	);
}

export default SportsBook;
