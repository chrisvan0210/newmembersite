import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import {
	NEW_MEMBER_PROMO_EN,
	REBATE_PROMO_EN,
	RELOAD_PROMO_EN,
	SPECIAL_PROMO_EN,
} from '@/constants/SubMenu/promotionsSection';

import styles from './index.module.scss';
import MainContent from './MainContent';

const newMemberPromo = (
	<MainContent
		sectionClassNames={NEW_MEMBER_PROMO_EN.sectionClassNames}
		wrapperClassNames={NEW_MEMBER_PROMO_EN.wrapperClassNames}
		contentClassNames={NEW_MEMBER_PROMO_EN.contentClassNames}
		linkProps={NEW_MEMBER_PROMO_EN.linkProps}
		hovClassNames={NEW_MEMBER_PROMO_EN.hovClassNames}
		menuClassNames={NEW_MEMBER_PROMO_EN.menuClassNames}
		imgProps={NEW_MEMBER_PROMO_EN.imgProps}
		playClassNames={NEW_MEMBER_PROMO_EN.playClassNames}
		playText={NEW_MEMBER_PROMO_EN.playText}
	/>
);

const reloadPromo = (
	<MainContent
		sectionClassNames={RELOAD_PROMO_EN.sectionClassNames}
		wrapperClassNames={RELOAD_PROMO_EN.wrapperClassNames}
		contentClassNames={RELOAD_PROMO_EN.contentClassNames}
		linkProps={RELOAD_PROMO_EN.linkProps}
		hovClassNames={RELOAD_PROMO_EN.hovClassNames}
		menuClassNames={RELOAD_PROMO_EN.menuClassNames}
		imgProps={RELOAD_PROMO_EN.imgProps}
		playClassNames={RELOAD_PROMO_EN.playClassNames}
		playText={RELOAD_PROMO_EN.playText}
	/>
);

const specialPromo = (
	<MainContent
		sectionClassNames={SPECIAL_PROMO_EN.sectionClassNames}
		wrapperClassNames={SPECIAL_PROMO_EN.wrapperClassNames}
		contentClassNames={SPECIAL_PROMO_EN.contentClassNames}
		linkProps={SPECIAL_PROMO_EN.linkProps}
		hovClassNames={SPECIAL_PROMO_EN.hovClassNames}
		menuClassNames={SPECIAL_PROMO_EN.menuClassNames}
		imgProps={SPECIAL_PROMO_EN.imgProps}
		playClassNames={SPECIAL_PROMO_EN.playClassNames}
		playText={SPECIAL_PROMO_EN.playText}
	/>
);

const rebatePromo = (
	<MainContent
		sectionClassNames={REBATE_PROMO_EN.sectionClassNames}
		wrapperClassNames={REBATE_PROMO_EN.wrapperClassNames}
		contentClassNames={REBATE_PROMO_EN.contentClassNames}
		linkProps={REBATE_PROMO_EN.linkProps}
		hovClassNames={REBATE_PROMO_EN.hovClassNames}
		menuClassNames={REBATE_PROMO_EN.menuClassNames}
		imgProps={REBATE_PROMO_EN.imgProps}
		playClassNames={REBATE_PROMO_EN.playClassNames}
		playText={REBATE_PROMO_EN.playText}
	/>
);

const promoContentByName = {
	newMemberPromo,
	reloadPromo,
	specialPromo,
	rebatePromo,
};

type PromoName = 'newMemberPromo' | 'reloadPromo' | 'specialPromo' | 'rebatePromo';

const PromotionsSubMenu = () => {
	const t = useTranslations();
	const [selectedPromo, setSelectedPromo] = useState<PromoName>('rebatePromo');
	const [active, setActive] = useState(true);
	const handleOnMouseOver = (promoName: PromoName) => {
		setActive(false);
		setSelectedPromo(promoName);
	};

	return (
		<div className={styles.subMenu__subSectionPromotions}>
			<div className={styles.subMenu__sectionContentPromotions}>
				<div className={styles.subMenu__promoSubNavHolder}>
					<ul className={styles.subMenu__promoTabSub}>
						<li className={styles.subMenu__promoTabSubList} onMouseOver={() => handleOnMouseOver('newMemberPromo')}>
							<Link href="#newMemberPromo" className={styles.subMenu__promoLink}>
								{t('sub_menu.promotions_new_member')}
							</Link>
						</li>
						<li className={styles.subMenu__promoTabSubList} onMouseOver={() => handleOnMouseOver('reloadPromo')}>
							<Link href="#reloadPromo" className={styles.subMenu__promoLink}>
								{t('sub_menu.promotions_reload_bonus')}
							</Link>
						</li>

						<li className={styles.subMenu__promoTabSubList} onMouseOver={() => handleOnMouseOver('specialPromo')}>
							<Link href="#specialPromo" className={styles.subMenu__promoLink}>
								{t('sub_menu.promotions_special_promo')}
							</Link>
						</li>
						<li
							className={classNames(styles.subMenu__promoTabSubList, { [styles['subMenu__promoTab--active']]: active })}
							onMouseOver={() => handleOnMouseOver('rebatePromo')}
						>
							<Link href="#rebatePromo" className={styles.subMenu__promoLink}>
								{t('sub_menu.promotions_rebate_promo')}
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.subMenu__promoSubNavContentHolder}>
					<div className={styles.subMenu__tabContent}>{promoContentByName[selectedPromo]}</div>
				</div>
			</div>
		</div>
	);
};

export default PromotionsSubMenu;
