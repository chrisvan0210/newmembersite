import { images } from '@/config/resources';
import { Locale } from '@/enums/app';
import type { HeaderInfo } from '@/types/app';

import { LIVE_CHAT } from './helpCenter';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

const HEADER_INFO_LIST: Record<Locale, HeaderInfo> = {
	[Locale.EN]: {
		logo: images.fb88_dot_com_en,
		altLogo: 'fb88 Logo',
		ball: images.fb88_ball_vn,
		altInstruct: 'fb88 ball',
		instruct: 'instruct',
		username: 'username',
		password: 'password',
		live_chat: LIVE_CHAT.EN,
		flag: `${cdn}/en.svg`,
		instruct_link: 'demo/Sports247',
		register_link: 'account/Register',
	},
	[Locale.CN]: {
		logo: images.fb88_dot_com_cn,
		altLogo: 'fb88 Logo',
		ball: images.fb88_ball_cn,
		altInstruct: 'fb88 ball',
		instruct: 'instruct',
		username: 'username',
		password: 'password',
		live_chat: LIVE_CHAT.CN,
		flag: `${cdn}/cn.svg`,
		instruct_link: 'demo/Sports247',
		register_link: 'account/Register',
	},
	[Locale.VN]: {
		logo: images.fb88_dot_com_en,
		altLogo: 'fb88 Logo',
		ball: images.fb88_ball_vn,
		altInstruct: 'fb88 ball',
		instruct: 'instruct',
		username: 'username',
		password: 'password',
		live_chat: LIVE_CHAT.VN,
		flag: `${cdn}/vn.svg`,
		instruct_link: 'demo/Sports247',
		register_link: 'account/Register',
	},
	[Locale.TH]: {
		logo: images.fb88_dot_com_en,
		altLogo: 'fb88 Logo',
		ball: images.fb88_ball_vn,
		altInstruct: 'fb88 ball',
		instruct: 'instruct',
		username: 'username',
		password: 'password',
		live_chat: LIVE_CHAT.TH,
		flag: `${cdn}/th.svg`,
		instruct_link: 'demo/Sports247',
		register_link: 'account/Register',
	},
};

export { HEADER_INFO_LIST };
