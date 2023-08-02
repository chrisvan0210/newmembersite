import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

const WEB_BROWSERS = [
	{ icon: 'chrome', link: 'https://www.google.com/chrome/browser/desktop/', label: 'chrome browser' },
	{ icon: 'firefox', link: 'https://www.mozilla.org/en-US/firefox/new/', label: 'firefox browser' },
	{ icon: 'ms_edge', link: 'https://www.microsoft.com/en-us/edge', label: 'edge browser' },
	{ icon: 'safari', link: 'https://safari.en.softonic.com/', label: 'safari browser' },
];

const SITE_INFO = [
	{ label: 'about_us', link: '/about-us' },
	{ label: 'terms_of_use', link: '/information/Terms' },
	{ label: 'responsible_gaming', link: '/responsible-gaming' },
	{ label: 'information', link: '/information/FAQAccount' },
	{ label: 'rules', link: '/information/RulesLive' },
	{ label: 'contact_us', link: '/contact-us' },
	{ label: 'affiliates', link: 'https://www.fb88aff.com/' },
	{ label: 'vip', link: '/vip' },
	{ label: 'rewards', link: '/rewards' },
];

export const VN_SITE_INFO = [
	...SITE_INFO,
	{ label: 'blog', link: '/blog', langs: [Locale.VN] },
	{ label: 'winners', link: '/winners/fishermen', langs: [Locale.VN] },
];

const PAYMENT_OPTIONS = [
	{
		locale: Locale.EN,
		info: [
			{ name: 'skrill', size: 52, link: 'https://www.skrill.com' },
			{ name: 'neteller', size: 60, link: 'https://www.neteller.com' },
			{ name: 'visa', size: 52, link: 'https://usa.visa.com' },
			{ name: 'master_card', size: 52, link: 'https://www.mastercard.us/en-us.html' },
			{ name: 'entropay', size: 48, link: 'https://www.entropay.com' },
		],
	},
	{
		locale: Locale.VN,
		info: [
			{ name: 'vietcom_bank', size: 16, link: '/cashier' },
			{ name: 'acb', size: 22, link: '/cashier' },
			{ name: 'bidv', size: 18, link: '/cashier' },
			{ name: 'techcom_bank', size: 22, link: '/cashier' },
			{ name: 'vietin_bank', size: 22, link: '/cashier' },
		],
	},
	{
		locale: Locale.TH,
		info: [
			{ name: 'bangkok_bank', size: 24, link: '/cashier' },
			{ name: 'kasikorn_bank_2', size: 24, link: '/cashier' },
			{ name: 'krung_thai_4', size: 26, link: '/cashier' },
			{ name: 'scb_thai', size: 26, link: '/cashier' },
		],
	},
	{
		locale: Locale.CN,
		info: [
			{ name: 'alipay', size: 36, link: '/cashier' },
			{ name: 'bank_1', size: 36, link: '/cashier' },
			{ name: 'bank_3', size: 36, link: '/cashier' },
			{ name: 'qqpay', size: 36, link: '/cashier' },
			{ name: 'unionpay', size: 36, link: '/cashier' },
			{ name: 'wechat', size: 36, link: '/cashier' },
		],
	},
];

const PAYMENT_SECURITY = [
	{ icon: 'gaming_labs', link: 'https://gaminglabs.com/' },
	{ icon: 'eighteen', link: 'https://www.thawte.com/' },
	{ icon: 'gam_care', link: 'https://www.gamcare.org.uk/' },
	{ icon: 'gamble_aware', link: 'https://www.begambleaware.org/' },
];

const PARTNERS = ['pagcor', 'verified_and_secured'];

const SPORTS_LOGOS = [
	images.premier_league,
	images.laliga,
	images.bundesliga,
	images.serie_a,
	images.ligue_1,
	images.nba,
	images.major_league,
	images.esports_cup,
];

export { PARTNERS, PAYMENT_OPTIONS, PAYMENT_SECURITY, SITE_INFO, SPORTS_LOGOS, WEB_BROWSERS };
