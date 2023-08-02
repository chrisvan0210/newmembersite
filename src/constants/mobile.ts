import { images } from '@/config/resources';
import type { SliderData } from '@/types/app';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

const MAIN_APK_VERSION = '2.0.2';
const MAIN_APK_SIZE = '59.1 MB';

const SPORTS_APK_VERSION = '3.0.2';
const SPORTS_APK_SIZE = '98.4 MB';

const MAIN_IOS_VERSION = '1.0.1';
const MAIN_IOS_SIZE = '26.9 MB';

const SPORTS_IOS_VERSION = '1.0.1';
const SPORTS_IOS_SIZE = '32.7 MB';

const ANDROID_SUPPORT = 'Android 4.0';
const IOS_SUPPORT = 'IOS 9';

const MOBILE_SLIDER: SliderData[] = [
	// EN
	{
		title: 'Ultimate Sports Entertainment at Fb88 Mobile',
		textPosition: 'left',
		webBg: `${cdn}/mobile/new/slider1-green-en.jpg`,
		webText: `${cdn}/mobile/new/join-ultimate-sports-entertainment-white-en.png`,
		btnLabel: 'play_now',
		btnLink: '/sportsbook',
		mobile: `${cdn}/mobile/new/slide1.jpg`,
	},
	{
		title: 'Enhance your Casino Level with Diverse Products',
		textPosition: 'left',
		webBg: `${cdn}/mobile/new/slider2-green-vn2.jpg`,
		webText: `${cdn}/mobile/new/enhance-casino-level-white-en.png`,
		btnLabel: 'play_now',
		btnLink: '/casinoclub',
		mobile: `${cdn}/mobile/new/slide2v2.jpg`,
	},
	{
		title: 'Thousands of Unique Games. Visit Slots at Fb88 Mobile ',
		textPosition: 'left',
		webBg: `${cdn}/mobile/new/slider3-green-en2.jpg`,
		webText: `${cdn}/mobile/new/slot-game-white-en.png`,
		btnLabel: 'play_now',
		btnLink: '/slots',
		mobile: `${cdn}/mobile/new/slide3v2.jpg`,
	},
	{
		title: 'Just One Touch with your Fingertips to Enjoy Fascinating Games',
		textPosition: 'left',
		webBg: `${cdn}/mobile/new/slider4-green-en2.jpg`,
		webText: `${cdn}/mobile/new/games-white-en.png`,
		btnLabel: 'play_now',
		btnLink: '/games',
		mobile: `${cdn}/mobile/new/slide4v2.jpg`,
	},
];

const MOBILE_CONTENT_HEADER = [
	`${cdn}/mobile/new/android.png`,
	`${cdn}/mobile/new/html5.png`,
	`${cdn}/mobile/new/ios.png`,
];

const MOBILE_SECURITY = [
	{
		image: `${cdn}/mobile/new/bottom-icon-1.png`,
		label: 'antivirus_antimalware',
	},
	{
		image: `${cdn}/mobile/new/bottom-icon-2.png`,
		label: 'secured_software',
	},
	{
		image: `${cdn}/mobile/new/bottom-icon-3.png`,
		label: 'trusted_online_gaming',
	},
];

const MOBILE_DOWNLOADS = [
	{
		image: images.fb88sports_logo,
		label: 'sports_app',
		apkSize: SPORTS_APK_SIZE,
		apkVersion: SPORTS_APK_VERSION,
		iosSize: SPORTS_IOS_SIZE,
		iosVersion: SPORTS_IOS_VERSION,
		apkLink: 'https://cdn.oneday88.com/Content/apps/android/fb88sports.apk',
		iosLink: 'https://0jb77.com/tHkK1',
		modalLabel: 'sports_app',
		modalTitle: 'sports_modal_title',
		qrCode: 'https://cdn.hanwei1234.com/Content/images/mobile/new/qrcode/fb88-sports-app-2022.jpg',
	},
	{
		image: images.fb88app_logo,
		label: 'main_app',
		apkSize: MAIN_APK_SIZE,
		apkVersion: MAIN_APK_VERSION,
		iosSize: MAIN_IOS_SIZE,
		iosVersion: MAIN_IOS_VERSION,
		apkLink: 'https://cdn.oneday88.com/Content/apps/android/fb88.apk',
		iosLink: 'https://0jb77.com/rF05i',
		modalLabel: 'main_app',
		modalTitle: 'main_modal_title',
		qrCode: 'https://cdn.hanwei1234.com/Content/images/mobile/new/qrcode/fb88-main-app-2022.jpg',
	},
];

const INSTALLATION_GUIDE = 'https://fb88.app/';

export {
	ANDROID_SUPPORT,
	INSTALLATION_GUIDE,
	IOS_SUPPORT,
	MOBILE_CONTENT_HEADER,
	MOBILE_DOWNLOADS,
	MOBILE_SECURITY,
	MOBILE_SLIDER,
};
