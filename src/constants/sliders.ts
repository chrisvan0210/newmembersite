import type { Settings } from 'react-slick';

import type { SliderData } from '@/types/app';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

// TODO Add content for other languages~
// Option 1: Just hardcode all here.
// Option 2: If images in cdn can follow standardized naming we can simply use `${link}-${locale}.jpg/png` with special case for CN
// Option 3?

export const SLIDER_SETTINGS: Settings = {
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: 'progressive',
};

export const COIN = `${cdn}/coin.png`;

export const HOME_SLIDER: SliderData[] = [
	// EN
	{
		title: 'home1',
		textPosition: 'center',
		webBg: `${cdn}/slider/sponsor/web-mainz05-yw`,
		webText: '',
		btnLabel: 'more_info',
		btnLink: '/sponsor',
		mobile: `${cdn}/slider/sponsor/mobile-mainz05.webp`,
	},
	{
		title: 'home2',
		textPosition: 'right',
		webBg: `${cdn}/slider/womens-fifa-2023/web-fifa-2023-womens-v1`,
		webText: '',
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esports',
		mobile: `${cdn}/slider/womens-fifa-2023/mobile-fifa-2023-womens-v1.webp`,
	},
	{
		title: 'home4',
		textPosition: 'center',
		webBg: `${cdn}/slider/main-slots/web-main-slot-2023`,
		webText: '',
		btnLabel: 'play_now',
		btnLink: '/slots',
		mobile: `${cdn}/slider/main-slots/mobile-main-slot-home-2023.webp`,
	},
	{
		title: 'home5',
		textPosition: 'right',
		webBg: `${cdn}/slider/welcome-bonus-100/web-welcome-bonus-100-2023`,
		webText: '',
		btnLabel: 'play_now',
		btnLink: '/promotions',
		mobile: `${cdn}/slider/welcome-bonus-100/mobile-welcome-bonus-100-2023.webp`,
	},
];

export const ESPORTS_SLIDER: SliderData[] = [
	// EN
	{
		title: 'FB88 eSports',
		textPosition: 'center',
		webBg: `${cdn}/esports/slider/web-esports-banner-slider-1-en.jpg`,
		webText: '',
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esports',
		mobile: `${cdn}/esports/slider/mobile-esports-banner-slider-1-en-vn.jpg`,
	},
	{
		title: 'eSports Live Streams',
		textPosition: 'right',
		webBg: `${cdn}/esports/slider/web-esports-2023-en.jpg`,
		webText: `${cdn}/esports/slider/text/text-esports-2023-en.png`,
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esports',
		mobile: `${cdn}/esports/slider/mobile-esports-2023-en.jpg`,
	},
	{
		title: 'eSports Betting Platform',
		textPosition: 'right',
		webBg: `${cdn}/esports/slider/web-esports-banner3-bg-en.jpg`,
		webText: `${cdn}/esports/slider/text/text-esports-banner3-en.png`,
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esports',
		mobile: `${cdn}/esports/slider/mobile-esports-banner-bg-en.jpg`,
	},
	{
		title: 'Real Money PUBG Betting',
		textPosition: 'right',
		webBg: `${cdn}/esports/slider/ESports_Banner_PUBG.jpg`,
		webText: `${cdn}/esports/slider/text/GrText_PUBG_EN.png`,
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esports',
		mobile: `${cdn}/esports/slider/Mobile_PUBG.jpg`,
	},
	{
		title: 'eSports 7 Attractive Betting Odds',
		textPosition: 'right',
		webBg: `${cdn}/esports/slider/web-esports7-2023-en.jpg`,
		webText: `${cdn}/esports/slider/text/text-esports7-2023-en.png`,
		btnLabel: 'play_now',
		btnLink: '/sportsbook/esportsx',
		mobile: `${cdn}/esports/slider/mobile-esport7-2023-en.jpg`,
	},
];

export const SLOTS_SLIDER: SliderData[] = [
	// EN
	{
		title: 'PG SLOT ONLINE',
		textPosition: 'center',
		webBg: `${cdn}/slot/NewLandingPage/TopSlider/main-slots/web-main-slot-en-2023.jpg`,
		webText: '',
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/slot/NewLandingPage/TopSlider/main-slots/mobile-main-slot-2023.jpg`,
	},
	{
		title: 'MYSTICAL SPIRITS',
		textPosition: 'right',
		webBg: `${cdn}/slot/NewLandingPage/TopSlider/mystical-spirit/web-mystical-spirit.jpg`,
		webText: `${cdn}/slot/NewLandingPage/TopSlider/mystical-spirit/text-mystical-spirit-vn.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/slot/NewLandingPage/TopSlider/mystical-spirit/mobile-mystical-spirit.jpg`,
	},
	{
		title: 'SONGKRAN SPLASH',
		textPosition: 'right',
		webBg: `${cdn}/slot/NewLandingPage/TopSlider/songkran-splash/web-songkran-splash-bg.jpg`,
		webText: `${cdn}/slot/NewLandingPage/TopSlider/songkran-splash/text-songkran-splash-vn.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/slot/NewLandingPage/TopSlider/songkran-splash/mobile-songkran-splash.jpg`,
	},
	{
		title: 'HAWAIIAN TIKI',
		textPosition: 'right',
		webBg: `${cdn}/slot/NewLandingPage/TopSlider/hawaiian-tiki/web-hawaiiantiki-slots-yw.jpg`,
		webText: `${cdn}/slot/NewLandingPage/TopSlider/hawaiian-tiki/text-hawaiiantiki-slots-vn.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/slot/NewLandingPage/TopSlider/hawaiian-tiki/mobile-hawaiiantiki-slots-yw.jpg`,
	},
	{
		title: 'MYSTICAL LAMP',
		textPosition: 'right',
		webBg: `${cdn}/slot/NewLandingPage/TopSlider/mysticalLamp/AfterLogin_SimSlot_Yw.jpg`,
		webText: `${cdn}/slot/NewLandingPage/TopSlider/mysticalLamp/Text_SimSlot_VN.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/slot/NewLandingPage/TopSlider/mysticalLamp/Mobile_NewPG_Slot.jpg`,
	},
];

export const GAMES_SLIDER: SliderData[] = [
	// EN
	{
		title: 'LUSTROUS OCEAN',
		textPosition: 'right',
		webBg: `${cdn}/casino/games/landing-page/AfterLogin-lustrous-ocean-Yw.jpg`,
		webText: `${cdn}/casino/games/landing-page/Text-lustrous-ocean-en.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/games/landing-page/AfterLogin-lustrous-ocean-Yw.jpg`,
	},
	{
		title: 'FISHERMEN GOLD',
		textPosition: 'right',
		webBg: `${cdn}/casino/games/landing-page/fishermen-bg.png`,
		webText: `${cdn}/casino/games/landing-page/fishermen-gold-logo.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/games/landing-page/fishermen-bg.png`,
	},
];

export const PROMOTIONS_SLIDER: SliderData[] = [
	// EN
	{
		title: 'CASINO CHALLENGE',
		textPosition: 'right',
		webBg: `${cdn}/casino/slider/promo-challenge-casino/web-challenge-casino-promo-yw2.jpg`,
		webText: `${cdn}/casino/slider/promo-challenge-casino/yellowtext-challenge-casino-promo-en2.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/slider/promo-challenge-casino/mobile-challenge-casino-promo2.jpg`,
	},
	{
		title: '150% SLOTS WELCOME BONUS',
		textPosition: 'center',
		webBg: `${cdn}/casino/slider/promotions/slots-welcome-bonus/web-slots-welcome-bonus-promo-yw.jpg`,
		webText: `${cdn}/casino/slider/promotions/slots-welcome-bonus/text-slots-welcome-bonus-promo-en-yw.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/slider/promotions/slots-welcome-bonus/mobile-slots-welcome-bonus-promo-en-home.jpg`,
	},
	{
		title: '100% WELCOME BONUS',
		textPosition: 'right',
		webBg: `${cdn}/casino/slider/promotions/100percent-welcome-bonus/web-promotnc-welcome-bonus-promo-2023-yw-bg.jpg`,
		webText: `${cdn}/casino/slider/promotions/100percent-welcome-bonus/text-promotnc-welcome-bonus-promo-2023-en-yw.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/slider/promotions/100percent-welcome-bonus/mobile-promotnc-welcome-bonus-promo-2023-yw-bg.jpg`,
	},
	{
		title: '0.3% DAILY SPORTS 3 REBATE',
		textPosition: 'right',
		webBg: `${cdn}/casino/slider/promotions/sports3/bgyw-sports3-daily-rebate.jpg`,
		webText: `${cdn}/casino/slider/promotions/sports3/text-sports3-daily-rebate-en.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/slider/promotions/sports3/mobile-sports3-daily-rebate.jpg`,
	},
	{
		title: '0.5% DAILY SPORTS 247 REBATE',
		textPosition: 'right',
		webBg: `${cdn}/casino/slider/Promo-sports247/AfterLogin-Sports247-Promo-Yw.jpg`,
		webText: `${cdn}/casino/slider/Promo-sports247/GreenText-Sports247-EN2.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/casino/slider/Promo-sports247/Moblie-Sports247-Promo2.jpg`,
	},
];

export const HOT_PRODUCTS_SLIDER = [
	`${cdn}/home/hotInMonth/hot-products-sports-3-en.jpg`,
	`${cdn}/home/hotInMonth/hot-products-hawaian-tiki-en.jpg`,
	`${cdn}/home/hotInMonth/hot-products-songkran-splash-en.jpg`,
	`${cdn}/home/hotInMonth/hot-products-mystical-spirits-en.jpg`,
	`${cdn}/home/hotInMonth/hot-products-club8-2023-envn.jpg`,
];

export const HOT_PRODUCTS_LIST = [
	// EN
	{ name: 'majestic_treasure', image: `${cdn}/home/thumbnails/MajesticTreasures.jpg` },
	{ name: 'mermaid_riches', image: `${cdn}/home/thumbnails/MermaidRiches.jpg` },
	{ name: 'buffalo_win', image: `${cdn}/home/thumbnails/BuffaloWin.jpg` },
	{ name: 'prosperity_tree', image: `${cdn}/home/thumbnails/Prosperity-Tree.jpg` },
	{ name: 'rise_of_apollo', image: `${cdn}/home/thumbnails/RiseOfApollo.jpg` },
	{ name: 'cheung_po_tsai', image: `${cdn}/home/thumbnails/Cheung-Po-Tsai.jpg` },
	{ name: 'dragon_8', image: `${cdn}/home/thumbnails/Dragon-8.jpg` },
	{ name: 'world_cup_fever', image: `${cdn}/home/thumbnails/World-cup-fever.jpg` },
	{ name: 'heist_stakes', image: `${cdn}/home/thumbnails/HeistStakes.jpg` },
	{ name: 'fortune_cat', image: `${cdn}/home/thumbnails/Fortune-Cat.jpg` },
];

export const TOP_WINNERS_SLIDER = [
	`${cdn}/home/winInMonth/top-winners-heist-stakes-en.jpg`,
	`${cdn}/home/winInMonth/top-winners-phoenix-rises-en.jpg`,
	`${cdn}/home/winInMonth/top-winners-candy-bonanza-en.jpg`,
];

export const TOP_WINNERS_LIST = [
	// EN
	{ product: 'Lucky-FA', name: 'co**nm**he**2', amount: '294,364', image: `${cdn}/home/thumbnails/Lucky-FA.jpg` },
	{
		product: 'MythofPhoenix',
		name: 'ng**38**79*',
		amount: '408,163',
		image: `${cdn}/home/thumbnails/MythofPhoenix.jpg`,
	},
	{
		product: 'JurassicKingdom',
		name: 'yx**cu**',
		amount: '283,147',
		image: `${cdn}/home/thumbnails/JurassicKingdom.jpg`,
	},
	{
		product: 'RiseOfApollo',
		name: 'ng**ho**79*',
		amount: '244,650',
		image: `${cdn}/home/thumbnails/RiseOfApollo.jpg`,
	},
	{
		product: 'LegendaryMonkeyKing',
		name: 'th**ng**cu**',
		amount: '213,980',
		image: `${cdn}/home/thumbnails/LegendaryMonkeyKing.jpg`,
	},
	{ product: 'Vanessa', name: 'ng**yh**23*', amount: '262,125', image: `${cdn}/home/thumbnails/Vanessa.jpg` },
	{
		product: 'Zombie-Hunters',
		name: 'cr**ho**62*',
		amount: '321,125',
		image: `${cdn}/home/thumbnails/Zombie-Hunters.jpg`,
	},
];
