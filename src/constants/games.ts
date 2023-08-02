import { images } from '@/config/resources';
import { GameType } from '@/enums/app';
import type { GameDisplayData } from '@/types/app';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

export const GAME_DISPLAY: GameDisplayData[] = [
	{
		type: GameType.LUSTROUS_OCEAN,
		title: 'games.lustrous_ocean',
		description: 'games.lustrous_ocean_desc',
		infoImages: [
			`${cdn}/casino/games/landing-page/lustrous-slide1.jpg`,
			`${cdn}/casino/games/landing-page/lustrous-slide2.jpg`,
			`${cdn}/casino/games/landing-page/lustrous-slide3.jpg`,
			`${cdn}/casino/games/landing-page/lustrous-slide4.jpg`,
			`${cdn}/casino/games/landing-page/lustrous-slide5.jpg`,
			`${cdn}/casino/games/landing-page/lustrous-slide6.jpg`,
		],
		tryLink: '/LustrousOcean?launch=1',
		playLink: '/LustrousOcean',
		background: `${cdn}/casino/games/landing-page/deskthumb-lustrous-ocean.png`,
		image1: `${cdn}/casino/games/landing-page/character-lustrous-ocean.png`,
		image1Width: 365,
		image1Height: 362,
		image1Top: 130,
		image1Left: 0,
	},
	{
		type: GameType.FISHERMEN_GOLD,
		title: 'games.fishermen_gold',
		description: 'games.fishermen_gold_desc',
		infoImages: [
			`${cdn}/casino/games/landing-page/fishermen-gold-1.jpg`,
			`${cdn}/casino/games/landing-page/fishermen-gold-2.jpg`,
			`${cdn}/casino/games/landing-page/fishermen-gold-3.jpg`,
			`${cdn}/casino/games/landing-page/fishermen-gold-4.jpg`,
			`${cdn}/casino/games/landing-page/fishermen-gold-5.jpg`,
			`${cdn}/casino/games/landing-page/fishermen-gold-6.jpg`,
		],
		tryLink: '/FishermanGold?launch=1',
		playLink: '/FishermanGold',
		background: `${cdn}/casino/games/landing-page/fisherman-gold-bg.png`,
		image1: `${cdn}/casino/games/landing-page/black-dolphin-fish.png`,
		image1Width: 92,
		image1Height: 110,
		image1Top: 220,
		image1Left: 20,
		image2: `${cdn}/casino/games/landing-page/gold-money-fish.png`,
		image2Width: 290,
		image2Height: 212,
		image2Top: 180,
		image2Left: -30,
	},
	{
		type: GameType.FISHING_KING,
		title: 'games.fishing_king',
		description: 'games.fishing_king_desc',
		infoImages: [
			`${cdn}/casino/games/landing-page/fishing-king-1.jpg`,
			`${cdn}/casino/games/landing-page/fishing-king-2.jpg`,
			`${cdn}/casino/games/landing-page/fishing-king-3.jpg`,
		],
		tryLink: '',
		playLink: '',
		background: `${cdn}/casino/games/landing-page/fishing-king-bg.png`,
		image1: `${cdn}/casino/games/landing-page/shark.png`,
		image1Width: 305,
		image1Height: 234,
		image1Top: 190,
		image1Left: 80,
		image2: `${cdn}/casino/games/landing-page/clown-fish.png`,
		image2Width: 120,
		image2Height: 178,
		image2Top: 260,
		image2Left: -240,
	},
];

export const SABA_CLUB: GameDisplayData = {
	type: GameType.SABA_CLUB,
	title: 'games.saba_club',
	description: 'games.saba_club_desc',
	infoImages: [
		`${cdn}/casino/games/landing-page/saba-screen1.jpg`,
		`${cdn}/casino/games/landing-page/saba-screen2.jpg`,
		`${cdn}/casino/games/landing-page/saba-screen3.jpg`,
		`${cdn}/casino/games/landing-page/saba-screen4.jpg`,
		`${cdn}/casino/games/landing-page/saba-screen5.jpg`,
		`${cdn}/casino/games/landing-page/saba-screen6.jpg`,
	],
	tryLink: '',
	playLink: '/SabaClub',
};

export const NUMBER_GAME: GameDisplayData = {
	type: GameType.NUMBER_GAME,
	title: 'lottery.side_widget_title',
	description: 'lottery.lottery_details',
	infoImages: [
		`${cdn}/lottery/numbergame/numbergame1.jpg`,
		`${cdn}/lottery/numbergame/numbergame2.jpg`,
		`${cdn}/lottery/numbergame/numbergame3.jpg`,
	],
	tryLink: '',
	playLink: 'Lottery/NumberGame',
};

export const DEFAULT_ANIMATED_OBJECTS = [
	{
		image: images.bubble,
		label: 'bubble',
		width: 24,
		height: 24,
		style: 'background__bubble1',
	},
	{
		image: images.bubble,
		label: 'bubble',
		width: 14,
		height: 14,
		style: 'background__bubble2',
	},
	{
		image: images.bubble,
		label: 'bubble',
		width: 36,
		height: 36,
		style: 'background__bubble3',
	},
	{
		image: images.seaweed_1,
		label: 'seaweed',
		width: 100,
		height: 139,
		style: 'background__seaweedLeft',
	},
	{
		image: images.seaweed_2,
		label: 'seaweed',
		width: 75,
		height: 129,
		style: 'background__seaweedRight',
	},
];

export const FISHKING_ANIMATED_OBJECTS = [
	{
		image: images.rocket,
		label: 'rocket',
		width: 147,
		height: 110,
		style: 'background__rocket',
	},
	{
		image: images.splash,
		label: 'splash',
		width: 139,
		height: 80,
		style: 'background__splash',
	},
];

export const CONGGAME_ANIMATED_OBJECTS = [
	{
		image: images.ball_8,
		label: 'ball',
		width: 63,
		height: 63,
		style: 'background__ball8',
	},
	{
		image: images.ball_30,
		label: 'ball',
		width: 45,
		height: 45,
		style: 'background__ball30',
	},
	{
		image: images.dice_6,
		label: 'dice',
		width: 64,
		height: 64,
		style: 'background__dice6',
	},
	{
		image: images.dice_3,
		label: 'dice',
		width: 87,
		height: 81,
		style: 'background__dice3',
	},
];
