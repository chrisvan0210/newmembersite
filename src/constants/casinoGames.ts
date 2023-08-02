import { GameType } from '@/enums/app';
import type { GameDisplayData } from '@/types/app';

const cdn = 'https://cdn.hanwei1234.com/Content/images';

export const CLUB_SELECT = [
	{ options: { label: 'casino.all', value: '0' }, name: 'all', link: '/casinoclub' },
	{ options: { label: 'casino.club_k', value: '1' }, name: 'club_king', link: '/livecasino#clubking' },
	{ options: { label: 'casino.club_q', value: '2' }, name: 'club_queen', link: '/livecasino#clubqueen' },
	{ options: { label: 'casino.club_j', value: '3' }, name: 'club_jack', link: '/livecasino#clubjack' },
	{ options: { label: 'casino.club_9', value: '4' }, name: 'club_nine', link: '/livecasino#clubnine' },
	{ options: { label: 'casino.club_8', value: '5' }, name: 'club_eight', link: '/livecasino#clubeight' },
];

// TODO
// Include GAME TYPE in CLUB data to implement GAMES TYPE Filter

export const GAME_TYPE_SELECT = [
	{ label: 'casino.favorites', value: 'favorites' },
	{ label: 'casino.baccarat', value: 'baccarat' },
	{ label: 'casino.sic_bo', value: 'sic_bo' },
	{ label: 'casino.roulette', value: 'roulette' },
	{ label: 'casino.dragon_tiger', value: 'dragon_tiger' },
	{ label: 'casino.fan_tan', value: 'fan_tan' },
	{ label: 'casino.lucky_spin', value: 'lucky_spin' },
	{ label: 'casino.black_jack', value: 'black_jack' },
	{ label: 'casino.bull_bull', value: 'bull_bull' },
	{ label: 'casino.win_3cards', value: 'win_3cards' },
	{ label: 'casino.blockchain_baccarat', value: 'blockchain_baccarat' },
	{ label: 'casino.craps', value: 'craps' },
	{ label: 'casino.dream_catcher', value: 'dream_catcher' },
	{ label: 'casino.mega_ball', value: 'mega_ball' },
	{ label: 'casino.lightning_dice', value: 'lightning_dice' },
	{ label: 'casino.casino_holdem', value: 'casino_holdem' },
];

const SAMPLE_CLUB_GAME_INFO: GameDisplayData = {
	type: GameType.LIVE_CASINO,
	title: 'casino.baccarat',
	description: 'casino.club_king_description',
	infoImages: [
		`${cdn}/livecasino/Thumbnails/club_king_baccarat1.jpg`,
		`${cdn}/livecasino/Thumbnails/club_king_baccarat1_1.jpg`,
		`${cdn}/livecasino/Thumbnails/club_king_baccarat1_2.jpg`,
		`${cdn}/livecasino/Thumbnails/club_king_baccarat1_4.jpg`,
		`${cdn}/livecasino/Thumbnails/club_king_baccarat2_1.jpg`,
	],
	tryLink: 'information/RulesLive',
	playLink: '/livecasino/ClubKing?table=851',
};

const CLUB_KING_DATA = {
	gamesFilter: [
		{ name: 'favorites', icon: 'favorites' },
		{ name: 'baccarat', icon: 'baccarat2' },
		{ name: 'roulette', icon: 'roulette2' },
		{ name: 'sic_bo', icon: 'sic_bo2' },
		{ name: 'dragon_tiger', icon: 'dragon_tiger2' },
		{ name: 'fan_tan', icon: 'fan_tan2' },
		{ name: 'lucky_spin', icon: 'roulette2' },
	],
	video: `${cdn}/casino/video/Capture_ClubKing_LiveCasino.mp4`,
	tables: [
		{
			label: 'baccarat',
			image: `${cdn}/livecasino/Thumbnails/King_Baccarat_Asia_1.jpg`,
			playLink: '/livecasino/ClubKing?table=851',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'euro_baccarat',
			image: `${cdn}/livecasino/Thumbnails/King_Baccarat_EU_1.jpg`,
			playLink: '/livecasino/ClubKing?table=831',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'dragon_tiger',
			image: `${cdn}/livecasino/Thumbnails/club_king_dragontiger1.jpg`,
			playLink: '/livecasino/ClubKing?table=850',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'roulette',
			image: `${cdn}/livecasino/Thumbnails/club_king_roulette1.jpg`,
			playLink: '/livecasino/ClubKing?table=830',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'sic_bo',
			image: `${cdn}/livecasino/Thumbnails/club_king_sicbo1.jpg`,
			playLink: '/livecasino/ClubKing?table=630',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'fan_tan',
			image: `${cdn}/livecasino/Thumbnails/club_king_fantan1.jpg`,
			playLink: '/livecasino/ClubKing?table=632',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'lucky_spin',
			image: `${cdn}/livecasino/Thumbnails/club_king_luckySpin1_1.jpg`,
			playLink: '/livecasino/ClubKing?table=660',
			info: SAMPLE_CLUB_GAME_INFO,
		},
	],
};

const CLUB_QUEEN_DATA = {
	gamesFilter: [
		{ name: 'favorites', icon: 'favorites' },
		{ name: 'baccarat', icon: 'baccarat2' },
		{ name: 'sic_bo', icon: 'sic_bo2' },
		{ name: 'roulette', icon: 'roulette2' },
		{ name: 'black_jack', icon: 'black_jack2' },
		{ name: 'dragon_tiger', icon: 'dragon_tiger2' },
		{ name: 'bull_bull', icon: 'bull_bull2' },
		{ name: 'win_3cards', icon: 'baccarat2' },
		{ name: 'blockchain_baccarat', icon: 'baccarat2' },
	],
	video: `${cdn}/casino/video/Capture_ClubQueen_LiveCasino.mp4`,
	tables: [
		{
			label: 'bid_baccarat',
			image: `${cdn}/livecasino/Thumbnails/club_queen_bidbaccarat1.jpg`,
			playLink: '/livecasino/ClubQueen?table=P017',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'vip_baccarat',
			image: `${cdn}/livecasino/Thumbnails/club_queen_VIPbaccarat1.jpg`,
			playLink: '/livecasino/ClubQueen?table=P018',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'black_jack',
			image: `${cdn}/livecasino/Thumbnails/club_queen_blackjack1_2.jpg`,
			playLink: '/livecasino/ClubQueen?table=D022',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'dragon_tiger',
			image: `${cdn}/livecasino/Thumbnails/club_queen_dragontiger1.jpg`,
			playLink: '/livecasino/ClubQueen?table=N020',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'roulette',
			image: `${cdn}/livecasino/Thumbnails/club_queen_roulette1.jpg`,
			playLink: '/livecasino/ClubQueen?table=P010',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'sic_bo',
			image: `${cdn}/livecasino/Thumbnails/club_queen_sicbo1.jpg`,
			playLink: '/livecasino/ClubQueen?table=27',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'bull_bull',
			image: `${cdn}/livecasino/Thumbnails/club_queen_bull1.jpg`,
			playLink: '/livecasino/ClubQueen?table=N022',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'win_3cards',
			image: `${cdn}/livecasino/Thumbnails/club_queen_win3card1_1.jpg`,
			playLink: '/livecasino/ClubQueen?table=M010',
			info: SAMPLE_CLUB_GAME_INFO,
		},
	],
};

const CLUB_JACK_DATA = {
	gamesFilter: [
		{ name: 'favorites', icon: 'favorites' },
		{ name: 'baccarat', icon: 'baccarat2' },
		{ name: 'sic_bo', icon: 'sic_bo2' },
		{ name: 'roulette', icon: 'roulette2' },
		{ name: 'dragon_tiger', icon: 'dragon_tiger2' },
		{ name: 'bull_bull', icon: 'bull_bull2' },
		{ name: 'win_3cards', icon: 'baccarat2' },
	],
	video: `${cdn}/casino/video/Capture_ClubJack_LiveCasino.mp4`,
	tables: [
		{
			label: 'baccarat',
			image: `${cdn}/livecasino/Thumbnails/club_jack_baccarat1.jpg`,
			playLink: '/livecasino/ClubJack?table=B032',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'dragon_tiger',
			image: `${cdn}/livecasino/Thumbnails/club_jack_dragontiger1.jpg`,
			playLink: '/livecasino/ClubJack?table=D030',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'roulette',
			image: `${cdn}/livecasino/Thumbnails/club_jack_roulette1.jpg`,
			playLink: '/livecasino/ClubJack?table=R001',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'sic_bo',
			image: `${cdn}/livecasino/Thumbnails/club_jack_sicbo1.jpg`,
			playLink: '/livecasino/ClubJack?table=S001',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'bull_bull',
			image: `${cdn}/livecasino/Thumbnails/club_jack_bullbull1_1.jpg`,
			playLink: '/livecasino/ClubJack?table=BB002',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'win_3cards',
			image: `${cdn}/livecasino/Thumbnails/club_jack_win3card1_1.jpg`,
			playLink: '/livecasino/ClubJack?table=W002',
			info: SAMPLE_CLUB_GAME_INFO,
		},
	],
};

const CLUB_NINE_DATA = {
	gamesFilter: [
		{ name: 'favorites', icon: 'favorites' },
		{ name: 'baccarat', icon: 'baccarat2' },
		{ name: 'sic_bo', icon: 'sic_bo2' },
		{ name: 'roulette', icon: 'roulette2' },
		{ name: 'dragon_tiger', icon: 'dragon_tiger2' },
		{ name: 'bull_bull', icon: 'bull_bull2' },
	],
	video: `${cdn}/casino/video/ClubNine_LiveCasino1.mp4`,
	tables: [
		{
			label: 'baccarat',
			image: `${cdn}/livecasino/Thumbnails/Club_Nine_Baccarat1_2.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=B15',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'dragon_tiger',
			image: `${cdn}/livecasino/Thumbnails/Club_Nine_DragonTiger1_2.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=D1',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'roulette',
			image: `${cdn}/livecasino/Thumbnails/Club_Nine_Roulette1_1.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=R1',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'sic_bo',
			image: `${cdn}/livecasino/Thumbnails/Club_Nine_Sicbo1_2.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=S2',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'speed_baccarat',
			image: `${cdn}/livecasino/Thumbnails/Club_Nine_SpeedBaccarat2_3.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=B18',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'bull_bull',
			image: `${cdn}/livecasino/Thumbnails/club_nine_bullBull1_1.jpg`,
			playLink: '/liveCasino/ClubNine?tableCode=NN1',
			info: SAMPLE_CLUB_GAME_INFO,
		},
	],
};

const CLUB_EIGHT_DATA = {
	gamesFilter: [
		{ name: 'favorites', icon: 'favorites' },
		{ name: 'baccarat', icon: 'baccarat2' },
		{ name: 'sic_bo', icon: 'sic_bo2' },
		{ name: 'roulette', icon: 'roulette2' },
		{ name: 'black_jack', icon: 'black_jack2' },
		{ name: 'craps', icon: 'craps2' },
		{ name: 'dream_catcher', icon: 'dream_catcher2' },
		{ name: 'dragon_tiger', icon: 'dragon_tiger2' },
		{ name: 'mega_ball', icon: 'mega_ball2' },
		{ name: 'lightning_dice', icon: 'lightning_dice2' },
		{ name: 'casino_holdem', icon: 'casino_holdem2' },
	],
	video: `${cdn}/casino/video/ClubEight_LiveCasino.mp4`,
	tables: [
		{
			label: 'craps',
			image: `${cdn}/livecasino/Thumbnails/club_eight_crap4.jpg`,
			playLink: '/livecasino/ClubEight',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'dream_catcher',
			image: `${cdn}/livecasino/Thumbnails/club_eight_dreamcatcher3.jpg`,
			playLink: '/livecasino/ClubEight',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'mega_ball',
			image: `${cdn}/livecasino/Thumbnails/club_eight_megaball3.jpg`,
			playLink: '/livecasino/ClubEight',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'lightning_dice',
			image: `${cdn}/livecasino/Thumbnails/club_eight_lightningdice2.jpg`,
			playLink: '/livecasino/ClubEight',
			info: SAMPLE_CLUB_GAME_INFO,
		},
		{
			label: 'casino_holdem',
			image: `${cdn}/livecasino/Thumbnails/club_eight_casinoholdem2.jpg`,
			playLink: '/livecasino/ClubEight',
			info: SAMPLE_CLUB_GAME_INFO,
		},
	],
};

export const CLUB_DATA = [
	CLUB_EIGHT_DATA,
	CLUB_KING_DATA,
	CLUB_QUEEN_DATA,
	CLUB_JACK_DATA,
	CLUB_NINE_DATA,
	CLUB_EIGHT_DATA,
];
