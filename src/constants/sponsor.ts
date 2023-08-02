import type { SliderData } from '@/types/app';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

export const SPONSOR_MAIN_SLIDER: SliderData[] = [
	// EN
	{
		title: 'MAINZ 05',
		textPosition: 'right',
		webBg: `${cdn}/sponsor/Sponsor_mainz05_banner.jpg`,
		webText: `${cdn}/sponsor/text/Text_Mainz05.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/sponsor/Mobile_Mainz05.jpg`,
	},
	{
		title: 'UEFA SUPER CUP SPONSORSHIP',
		textPosition: 'right',
		webBg: `${cdn}/sponsor/web-uefa-sponsor-banner.jpg`,
		webText: `${cdn}/sponsor/text/Text_SuperCup.png`,
		btnLabel: 'play_now',
		btnLink: '',
		mobile: `${cdn}/sponsor/Mobile_SuperCup.jpg`,
	},
];

export const SPOTLIGHT_SLIDER = [
	{ image: `${cdn}/sponsor/sponsor_thumbnail_1_v1.png`, details: 'main_2020_21_bundesliga' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_2_v1.png`, details: 'fb88_new_sponsor' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_3.png`, details: 'rouven_dong_won' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_4.png`, details: 'signing_ceremony' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_5.png`, details: 'signing_ceremony' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_6.png`, details: 'dong_won_jersey' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_3.png`, details: 'rouven_dong_won' },
	{ image: `${cdn}/sponsor/sponsor_thumbnail_4.png`, details: 'signing_ceremony' },
];

export const GAME_SLIDER = [
	`${cdn}/sponsor/fb88_sponsor_grid_1_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_5_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_2_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_6_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_3_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_7_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_4_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_8_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_7_v1.png`,
	`${cdn}/sponsor/fb88_sponsor_grid_3_v1.png`,
];

export const SUB_FOOTER_LOGOS = [
	{ label: 'Fb88.com', image: `${cdn}/sponsor/fb88-logo.png`, width: 275, height: 69 },
	{ label: 'Mainz 05', image: `${cdn}/sponsor/mainz-logo.png`, width: 177, height: 167 },
	{ label: 'UEFA Super Cup', image: `${cdn}/sponsor/uefa-logo.png`, width: 119, height: 185 },
];
