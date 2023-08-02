import { images } from '@/config/resources';

const protocol = 'https://';

// TODO
// Combine this with payment constants in footer

const PAYMENT_METHOD_LIST = {
	en: [
		{
			link: `${protocol}www.skrill.com/en/`,
			icon: 'skrill',
		},
		{
			link: `${protocol}www.neteller.com/en/`,
			icon: 'neteller',
		},
		{
			link: `${protocol}usa.visa.com`,
			icon: 'visa',
		},
		{
			link: `${protocol}www.mastercard.us/en-us.html`,
			icon: 'master_card',
		},
		{
			link: `${protocol}www.entropay.com`,
			icon: 'entropay',
		},
	],

	cn: [
		{
			link: 'disabled',
			icon: 'alipay',
		},
		{
			link: 'disabled',
			icon: 'unionpay',
		},
		{
			link: 'disabled',
			icon: 'qqpay',
		},
		{
			link: 'disabled',
			icon: 'bank_1',
		},
		{
			link: 'disabled',
			icon: 'wechat',
		},
		{
			link: 'disabled',
			icon: 'bank_3',
		},
	],

	th: [
		{
			link: '#',
			icon: 'bangkok_bank',
		},
		{
			link: '#',
			icon: 'kasikorn_bank_2',
		},
		{
			link: '#',
			icon: 'krung_thai_4',
		},
		{
			link: '#',
			icon: 'scb_thai',
		},
	],
	vn: [],
};

const PROMO_BONUS_CONTENT = {
	en: [
		{
			image: images.promo_welcome_bonus_en,
			alt: 'welcome bonus',
			width: 283,
			height: 133,
			percent: 'percent1',
			title: 'title1',
			description: 'description1',
			link: '/Promotions',
			yellow_text: 'yellow_text1',
		},
		{
			image: images.promo_reload_bonus_en,
			alt: 'reload bonus',
			width: 283,
			height: 133,
			percent: 'percent2',
			title: ['title2', 'title3'],
			description: 'description2',
			link: '/Promotions',
			yellow_text: 'yellow_text2',
		},
	],
	cn: [
		{
			image: images.promo_welcome_bonus_cn,
			alt: 'welcome bonus',
			width: 283,
			height: 133,
			percent: 'percent1',
			title: 'title1',
			description: 'description1',
			link: '/Promotions',
			yellow_text: 'yellow_text1',
		},
		{
			image: images.promo_reload_bonus_cn,
			alt: 'reload bonus',
			width: 283,
			height: 133,
			percent: 'percent2',
			title: 'title2',
			description: 'description2',
			link: '/Promotions',
			yellow_text: 'yellow_text2',
		},
	],
	th: [
		{
			image: images.promo_welcome_bonus_th,
			alt: 'welcome bonus',
			width: 283,
			height: 133,
			percent: 'percent1',
			title: 'title1',
			description: 'description1',
			link: '/Promotions',
			yellow_text: 'yellow_text1',
		},
		{
			image: images.promo_reload_bonus_th,
			alt: 'reload bonus',
			width: 283,
			height: 133,
			percent: 'percent2',
			title: ['title2', 'title3'],
			description: 'description2',
			link: '/Promotions',
			yellow_text: 'yellow_text2',
		},
	],
	vn: [],
};

export { PAYMENT_METHOD_LIST, PROMO_BONUS_CONTENT };
