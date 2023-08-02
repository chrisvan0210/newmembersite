import { notFound } from 'next/navigation';

import { COUNTRY_INFO_LIST } from '@/constants/app';
import { PAYMENT_OPTIONS } from '@/constants/footer';
import { SUPPORT_CN, SUPPORT_EN, SUPPORT_TH, SUPPORT_VN } from '@/constants/helpCenter';
import { HOME_TABS_CN, HOME_TABS_EN, HOME_TABS_TH, HOME_TABS_VN } from '@/constants/home';
import { Locale } from '@/enums/app';

const getLocales = async (locale: string) => {
	try {
		return (await import(`@/locales/${locale}.json`)).default;
	} catch (error) {
		return notFound();
	}
};

const setHeaderData = (locale: Locale) => {
	const [EN, VN, TH, CN] = COUNTRY_INFO_LIST;
	switch (locale) {
		case Locale.VN:
			return { logo: VN.fb88_logo, live_chat: VN.live_chat, flag: VN.flag };
		case Locale.TH:
			return { logo: TH.fb88_logo, live_chat: TH.live_chat, flag: TH.flag };
		case Locale.CN:
			return { logo: CN.fb88_logo, live_chat: CN.live_chat, flag: CN.flag };
		default:
			return { logo: EN.fb88_logo, live_chat: EN.live_chat, flag: EN.flag };
	}
};

const getPaymentInfoByLang = (locale: Locale) => {
	const [EN, VN, TH, CN] = PAYMENT_OPTIONS;
	switch (locale) {
		case Locale.VN:
			return VN.info;
		case Locale.TH:
			return TH.info;
		case Locale.CN:
			return CN.info;
		default:
			return EN.info;
	}
};

const getHomeTabsContentByLang = (locale: Locale) => {
	const VN = HOME_TABS_VN;
	const TH = HOME_TABS_TH;
	const CN = HOME_TABS_CN;
	const EN = HOME_TABS_EN;
	switch (locale) {
		case Locale.VN:
			return {
				header: VN.HEADERS_VN,
				tab1: VN.TAB1_VN,
				tab2: VN.TAB2_VN,
				tab3: VN.TAB3_VN,
				blog: VN.BLOG_VN,
			};
		case Locale.TH:
			return {
				header: TH.HEADERS_TH,
				tab1: TH.TAB1_TH,
				tab2: TH.TAB2_TH,
				tab3: TH.TAB3_TH,
				blog: TH.BLOG_TH,
			};
		case Locale.CN:
			return {
				header: CN.HEADERS_CN,
				tab1: CN.TAB1_CN,
				tab2: CN.TAB2_CN,
				tab3: CN.TAB3_CN,
				blog: CN.BLOG_CN,
			};
		default:
			return {
				header: EN.HEADERS_EN,
				tab1: EN.TAB1_EN,
				tab2: EN.TAB2_EN,
				tab3: EN.TAB3_EN,
				blog: EN.BLOG_EN,
			};
	}
};

const getSiteSupportByLang = (lang: Locale) => {
	switch (lang) {
		case Locale.VN:
			return {
				demo: SUPPORT_VN.DEMO_AND_LIVECHAT_VN,
				support: SUPPORT_VN.SUPPORT_DETAILS_VN,
			};
		case Locale.TH:
			return {
				demo: SUPPORT_TH.DEMO_AND_LIVECHAT_TH,
				support: SUPPORT_TH.SUPPORT_DETAILS_TH,
			};
		case Locale.CN:
			return {
				demo: SUPPORT_CN.DEMO_AND_LIVECHAT_CN,
				support: SUPPORT_CN.SUPPORT_DETAILS_CN,
			};
		default:
			return {
				demo: SUPPORT_EN.DEMO_AND_LIVECHAT_EN,
				support: SUPPORT_EN.SUPPORT_DETAILS_EN,
			};
	}
};

export { getHomeTabsContentByLang, getLocales, getPaymentInfoByLang, getSiteSupportByLang, setHeaderData };
