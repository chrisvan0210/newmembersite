import { images } from '@/config/resources';
import { SupportType } from '@/enums/app';
import type { SiteSupportData } from '@/types/app';

const LIVE_CHAT = {
	EN: {
		image: images.live_chat_support,
		type: SupportType.LIVE_CHAT,
		label: 'CHAT',
		link: 'https://vscaue.xxyuzvix.com/chatwindow.aspx?siteId=233445&planId=d0010000-0000-0000-0000-008e00038fe5',
	},
	VN: {
		image: images.live_chat_support,
		type: SupportType.LIVE_CHAT,
		label: 'HỖ TRỢ TRỰC TUYẾN',
		link: 'https://direct.lc.chat/13434432',
	},
	TH: {
		image: images.live_chat_support,
		type: SupportType.LIVE_CHAT,
		label: 'สนทนา',
		link: 'https://vscaue.s1ejfg1e.com/chatwindow.aspx?siteId=233445&planId=00020000-0000-0000-0000-008e00038fe5',
	},
	CN: {
		image: images.live_chat_support,
		type: SupportType.LIVE_CHAT,
		label: '聊天',
		link: 'https://vscaue.1une96oj.com/chatwindow.aspx?siteId=233445&planId=0e020000-0000-0000-0000-008e00038fe5',
	},
};

const DEMO_AND_LIVECHAT_EN: SiteSupportData[] = [
	{ image: images.deposit_demo, type: SupportType.DEMO, label: 'DEPOSIT', link: '/demo/deposit' },
	{ image: images.withdrawal_demo, type: SupportType.DEMO, label: 'WITHDRAW', link: '/demo/withdraw' },
	LIVE_CHAT.EN,
];
const SUPPORT_DETAILS_EN: SiteSupportData[] = [
	{ image: images.phone, type: SupportType.PHONE, label: '1800 969 661', link: '' },
	{ image: images.phone, type: SupportType.PHONE, label: '(+63) 917 708 2008', link: '' },
	{
		image: images.facebook,
		type: SupportType.FACEBOOK,
		label: 'Facebook',
		link: 'https://www.messenger.com/t/fanpagefb88',
	},
	{ image: images.viber, type: SupportType.VIBER, label: 'cskh@fb88', link: '' },
	{ image: images.whatsapp, type: SupportType.WHATSAPP, label: 'Whatsapp', link: 'https://wa.me/639177082008' },
	{ image: images.skype, type: SupportType.SKYPE, label: 'Skype', link: 'skype:live:cskh_195?chat' },
	{ image: images.telegram, type: SupportType.TELEGRAM, label: 'Telegram', link: 'https://t.me/CSKHFB88' },
	{ image: images.email, type: SupportType.EMAIL, label: 'Email: help@fb88.com', link: 'mailto:help@fb88.com' },
];

export const DEMO_AND_LIVECHAT_VN: SiteSupportData[] = [
	{ image: images.deposit_demo, type: SupportType.DEMO, label: 'GỬI TIỀN', link: '/demo/deposit' },
	{ image: images.withdrawal_demo, type: SupportType.DEMO, label: 'RÚT TIỀN', link: '/demo/withdraw' },
	LIVE_CHAT.VN,
];
const SUPPORT_DETAILS_VN: SiteSupportData[] = [
	{ image: images.phone, type: SupportType.PHONE, label: '1800 969 661 ( Miễn Phí )', link: '' },
	{ image: images.phone, type: SupportType.PHONE, label: '(+84) 247 300 6877 Hà Nội', link: '' },
	{
		image: images.facebook,
		type: SupportType.FACEBOOK,
		label: 'Facebook',
		link: 'https://www.messenger.com/t/fanpagefb88',
	},
	{ image: images.viber, type: SupportType.VIBER, label: 'cskh@fb88', link: '' },
	{ image: images.whatsapp, type: SupportType.WHATSAPP, label: 'Whatsapp', link: 'https://wa.me/639177082008' },
	{ image: images.skype, type: SupportType.SKYPE, label: 'Skype', link: 'skype:live:cskh_195?chat' },
	{ image: images.telegram, type: SupportType.TELEGRAM, label: 'Telegram', link: 'https://t.me/CSKHFB88' },
	{ image: images.email, type: SupportType.EMAIL, label: 'cskh@fb88.com', link: 'mailto:cskh@fb88.com' },
];

const DEMO_AND_LIVECHAT_TH: SiteSupportData[] = [
	{ image: images.deposit_demo, type: SupportType.DEMO, label: 'ฝากเงิน', link: '/demo/deposit' },
	{ image: images.withdrawal_demo, type: SupportType.DEMO, label: 'ถอน', link: '/demo/withdraw' },
	LIVE_CHAT.TH,
];
const SUPPORT_DETAILS_TH: SiteSupportData[] = [
	{ image: images.phone, type: SupportType.PHONE, label: '(+66) 2 0268302', link: '' },
	{ image: images.email, type: SupportType.EMAIL, label: 'thai.cs@fb88.com', link: 'mailto:thai.cs@fb88.com' },
	{ image: images.skype, type: SupportType.SKYPE, label: 'Skype', link: 'skype:live:.cid.802cae428580fdd5?chat' },
	{ image: images.viber, type: SupportType.VIBER, label: '(+63) 917 816 8999', link: '' },
	{ image: images.telegram, type: SupportType.TELEGRAM, label: '@Fb88thai', link: 'https://t.me/Fb88thai' },
	{ image: images.whatsapp, type: SupportType.WHATSAPP, label: 'Whatsapp', link: 'https://wa.me/639178168999' },
	{
		image: images.line,
		type: SupportType.LINE,
		label: 'Line ID : @fb88th',
		link: 'https://line.me/R/ti/p/%40233chhry',
	},
];

const DEMO_AND_LIVECHAT_CN: SiteSupportData[] = [
	{ image: images.deposit_demo, type: SupportType.DEMO, label: '存款', link: '/demo/deposit' },
	{ image: images.withdrawal_demo, type: SupportType.DEMO, label: '提款', link: '/demo/withdraw' },
	LIVE_CHAT.CN,
];
const SUPPORT_DETAILS_CN: SiteSupportData[] = [
	{ image: images.phone, type: SupportType.PHONE, label: '(+86) 218-024-5988', link: '' },
	{ image: images.email, type: SupportType.EMAIL, label: 'kefu@fb88.com', link: 'mailto:kefu@fb88.com' },
	{ image: images.deposit_demo, type: SupportType.DEMO, label: '秒速存款', link: '/cn/payment/deposit' },
	{ image: images.withdrawal_demo, type: SupportType.DEMO, label: '快捷提款', link: '/cn/payment/withdraw' },
];

const CONCERN_OPTIONS = [
	{ label: 'contact.login', value: 'login' },
	{ label: 'contact.my_account', value: 'my-account' },
	{ label: 'contact.deposit', value: 'deposit' },
	{ label: 'contact.withdrawal', value: 'withdrawal' },
	{ label: 'contact.betting_information', value: 'betting-information' },
	{ label: 'contact.technical', value: 'technical' },
	{ label: 'contact.others', value: 'others' },
];

export const SUPPORT_EN = { DEMO_AND_LIVECHAT_EN, SUPPORT_DETAILS_EN };
export const SUPPORT_VN = { DEMO_AND_LIVECHAT_VN, SUPPORT_DETAILS_VN };
export const SUPPORT_TH = { DEMO_AND_LIVECHAT_TH, SUPPORT_DETAILS_TH };
export const SUPPORT_CN = { DEMO_AND_LIVECHAT_CN, SUPPORT_DETAILS_CN };
export { CONCERN_OPTIONS, LIVE_CHAT };
