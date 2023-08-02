'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { images } from '@/config/resources';
import { FB88_OFFICES, HOW_DIFFERENT } from '@/constants/aboutUs';
import { Locale } from '@/enums/app';

import styles from './page.module.scss';

function AboutUs() {
	const locale = useLocale();
	const t = useTranslations();
	const [imageLocale, setImageLocale] = useState(locale);

	return (
		<div className="pageContainer">
			<div className={styles.banner}>
				<Image
					src={images.about_us_people}
					width={1920}
					height={402}
					alt={t('common.about_us')}
					className={styles.banner__image}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.content__container}>
					{t('about_us.intro')}
					<ul className={styles.content__badExperienceList}>
						<li>{t('about_us.bad_experience1')}</li>
						<li>{t('about_us.bad_experience2')}</li>
						<li>{t('about_us.bad_experience3')}</li>
						<li>{t('about_us.bad_experience4')}</li>
					</ul>
					<div className={styles.offices}>
						{FB88_OFFICES.map(office => (
							<div key={office.label} className={styles.offices__container}>
								<Image
									src={office.image}
									width={324}
									height={216}
									alt={office.label}
									className={styles.offices__image}
								/>
								<span className={styles.offices__name}>{t(`about_us.${office.label}`)}</span>
							</div>
						))}
					</div>
					<p>{t('about_us.fb88_was_born')}</p>
					<p>{t('about_us.leading_betting_company')}</p>
					<div className={styles.offices__container}>
						<Image
							src={`${images.about_us_office}-${imageLocale.toUpperCase()}.png`}
							width={1042}
							height={268}
							alt={t('about_us.fair_games_trusted_place')}
							className={styles.offices__image}
							onError={() => setImageLocale(Locale.EN)}
						/>
						<span className={styles.offices__name}>{t('about_us.fb88_trusted_name_desc')}</span>
					</div>

					<h3 className={styles.mission}>{t('about_us.our_mission')}</h3>
					<span>{t('about_us.our_mission_desc')}</span>
					<h3 className={styles.difference__header}>{t('about_us.how_are_we_different')}</h3>
					<div className={styles.difference}>
						{HOW_DIFFERENT.map(item => (
							<div key={item.title} className={styles.difference__row}>
								<div className={styles.difference__text}>
									<span className={styles.difference__title}>{t(`about_us.${item.title}`)}</span>
									<p>{t(`about_us.${item.content1}`)}</p>
									{item.content2 !== '' && <p>{t(`about_us.${item.content2}`)}</p>}
								</div>
								<Image
									src={item.image}
									width={item.width}
									height={item.height}
									alt={item.title}
									className={styles.difference__image}
								/>
							</div>
						))}
					</div>
					<div className={styles.difference__slogan}>
						<span>
							{t('about_us.our_slogan')}
							<span className={styles.difference__fairGames}>{t('about_us.fair_games_trusted_place')}</span>
							{t('about_us.strive_to_do')}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
