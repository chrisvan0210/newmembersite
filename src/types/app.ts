import type { GameType, SupportType } from '@/enums/app';
import type { SlotsCategory, SlotsFilter } from '@/enums/menu-selection';

export interface SliderData {
	title: string;
	textPosition: 'left' | 'center' | 'right';
	webBg: string;
	webText: string;
	btnLabel: string;
	btnLink: string;
	mobile: string;
}

export interface ListSliderData {
	product?: string;
	name: string;
	image: string;
	amount?: string;
}

export interface GameDisplayData {
	type: GameType | SlotsCategory;
	title: string;
	description: string;
	infoImages: string[];
	tryLink?: string;
	playLink: string;
	rulesLink?: string;
	background?: string;
	image1?: string;
	image1Width?: number;
	image1Height?: number;
	image1Top?: number;
	image1Left?: number;
	image2?: string;
	image2Width?: number;
	image2Height?: number;
	image2Top?: number;
	image2Left?: number;
}

export interface SiteSupportData {
	image?: string;
	type: SupportType;
	label?: string;
	link: string;
}

export interface SlotsCardType {
	id: number;
	category: SlotsCategory;
	filter: SlotsFilter;
	image: string;
	label: string;
	more_info: GameDisplayData;
}
export interface HeaderInfo {
	logo: string;
	altLogo: string;
	ball: string;
	altInstruct: string;
	instruct: string;
	username: string;
	password: string;
	live_chat: SiteSupportData;
	flag: string;
	instruct_link: string;
	register_link: string;
}
