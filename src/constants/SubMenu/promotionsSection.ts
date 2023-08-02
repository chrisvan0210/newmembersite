const NEW_MEMBER_PROMO_EN = {
	sectionClassNames: [],
	wrapperClassNames: [],
	contentClassNames: ['subMenu__newMemberPromo'],
	linkProps: [
		{ href: '/promotions#welcome-bonus', target: '_blank' },
		{ href: '/promotions#clubKoi-welcome-bonus', target: '_blank' },
		{ href: '/promotions#firsttime-deposit-bonus', target: '_blank' },
	],
	hovClassNames: ['subMenu__subHovWelcomeBonus', 'subMenu__subHovWelcomeBonus', 'subMenu__subHovWelcomeBonus'],
	menuClassNames: [
		'subMenu__promoMenuWelcomeBonus',
		'subMenu__promoMenuWelcomeBonus',
		'subMenu__promoMenuWelcomeBonus',
	],
	imgProps: [
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/promonav-welcome-bonus-promo-en.jpg',
				width: 241,
				height: 114,
				alt: 'fb88 100% welcome bonus',
			},
		],
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/promonav-slots-welcome-bonus-promo-en.jpg',
				width: 241,
				height: 114,
				alt: 'fb88 100% welcome bonus',
			},
		],
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/promonav-38percent-welcome-bonus-2023-en.jpg',
				width: 241,
				height: 114,
				alt: 'fb88 100% welcome bonus',
			},
		],
	],
	playClassNames: ['subMenu__subPlayWelcomeBonus', 'subMenu__subPlayWelcomeBonus', 'subMenu__subPlayWelcomeBonus'],
	playText: ['sub_menu.promotions_claim_now', 'sub_menu.promotions_claim_now', 'sub_menu.promotions_claim_now'],
};

const RELOAD_PROMO_EN = {
	sectionClassNames: [],
	wrapperClassNames: [],
	contentClassNames: ['subMenu__reloadPromo'],
	linkProps: [{ href: '/promotions#reload-bonus', target: '_blank' }],
	hovClassNames: ['subMenu__subHovReloadPromo'],
	menuClassNames: ['subMenu__promoMenuReloadPromo'],
	imgProps: [
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/promonav-third-deposit-reload-bonus-en.jpg',
				width: 241,
				height: 114,
				alt: 'fb88 thuong 30% danh cho tien gui lan ba',
			},
		],
	],
	playClassNames: ['subMenu__subPlayReloadPromo'],
	playText: ['sub_menu.promotions_claim_now'],
};

const SPECIAL_PROMO_EN = {
	sectionClassNames: [],
	wrapperClassNames: [],
	contentClassNames: ['subMenu__specialPromo'],
	linkProps: [{ href: '/promotions#challenge-casino', target: '_blank' }],
	hovClassNames: ['subMenu__subHovSpecialPromo'],
	menuClassNames: ['subMenu__promoMenuSpecialPromo'],
	imgProps: [
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/promonav-challenge-casino-promo-en2.jpg',
				width: 241,
				height: 114,
				alt: 'CHALLENGE CASINO CLAIM UP TO USD 125',
			},
		],
	],
	playClassNames: ['subMenu__subPlaySpecialPromo'],
	playText: ['sub_menu.promotions_claim_now'],
};

const REBATE_PROMO_EN = {
	sectionClassNames: [],
	wrapperClassNames: [],
	contentClassNames: ['subMenu__rebatePromo'],
	linkProps: [
		{ href: '/promotions#livecasino-rebate', target: '_blank' },
		{ href: '/promotions#slots-rebate', target: '_blank' },
	],
	hovClassNames: ['subMenu__subHovRebatePromo', 'subMenu__subHovRebatePromo'],
	menuClassNames: ['subMenu__promoMenuRebatePromo', 'subMenu__promoMenuRebatePromo'],
	imgProps: [
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/PromoNav_LiveCasinoRebate_EN.jpg?v=201812',
				width: 241,
				height: 114,
				alt: 'fb88 hoan tra moi ngay casino truc tuyen',
			},
		],
		[
			{
				src: 'https://cdn.hanwei1234.com/Content/images/promo/PromoNav_SlotsRebate_EN.jpg',
				width: 241,
				height: 114,
				alt: 'fb88 slots rebate',
			},
		],
	],
	playClassNames: ['subMenu__subPlayRebatePromo', 'subMenu__subPlayRebatePromo'],
	playText: ['sub_menu.promotions_claim_now', 'sub_menu.promotions_claim_now'],
};

export { NEW_MEMBER_PROMO_EN, REBATE_PROMO_EN, RELOAD_PROMO_EN, SPECIAL_PROMO_EN };
