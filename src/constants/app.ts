import { images } from '@/config/resources';
import { Locale } from '@/enums/app';

import { LIVE_CHAT } from './helpCenter';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

const COUNTRY_INFO_LIST = [
	{
		code: Locale.EN,
		fb88_logo: images.fb88_fair_games,
		flag: `${cdn}/en.svg`,
		label: 'English',
		live_chat: LIVE_CHAT.EN,
	},
	{
		code: Locale.VN,
		fb88_logo: `${cdn}/theme/logo/fb88-original.svg`,
		flag: `${cdn}/vn.svg`,
		label: 'Tiếng Việt',
		live_chat: LIVE_CHAT.VN,
	},
	{
		code: Locale.TH,
		fb88_logo: `${cdn}/theme/logo/fb88-original.svg`,
		flag: `${cdn}/th.svg`,
		label: 'ไทย',
		live_chat: LIVE_CHAT.TH,
	},
	{
		code: Locale.CN,
		fb88_logo: images.fb88_logo_cn,
		flag: `${cdn}/cn.svg`,
		label: '中文',
		live_chat: LIVE_CHAT.CN,
	},
];

const MAIN_MENU = [
	{ label: 'home', link: '/', icon: 'home' },
	{ label: 'mobile', link: '/mobile', icon: 'mobile' },
	{ label: 'sportsbook', link: '/sportsbook', icon: 'sports' },
	{ label: 'virtual_sports', link: '/virtual-sports', icon: 'virtual_sports' },
	{ label: 'esports', link: '/esports', icon: 'esports' },
	{ label: 'casino_club', link: '/casinoclub', icon: 'live_casino' },
	{ label: 'slots', link: '/slots', icon: 'slots' },
	{ label: 'games', link: '/games', icon: 'game_icon_3' },
	{ label: 'lottery', link: '/lottery', icon: 'lotto' },
	{ label: 'promotions', link: '/promotions', icon: 'promotion' },
];

export { COUNTRY_INFO_LIST, MAIN_MENU };
