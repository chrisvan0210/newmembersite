import { images } from '@/config/resources';
import { SlotsCategory, SlotsFilter } from '@/enums/menu-selection';

export const cdn = 'https://cdn.hanwei1234.com/Content/images';

export const SLOTS_CATEGORY = [
	{ value: SlotsCategory.ALL, label: 'slots.menu_all', icon: images.slots_all },
	{ value: SlotsCategory.KOI, label: 'slots.menu_koi', icon: images.slots_koi },
	{ value: SlotsCategory.PG, label: 'slots.menu_pg', icon: images.slots_pg },
	{ value: SlotsCategory.SIM, label: 'slots.menu_sim', icon: images.slots_sim },
	{ value: SlotsCategory.QUEEN, label: 'slots.menu_queen', icon: images.slots_queen },
];
export const SLOTS_FILTER = [
	{ value: SlotsFilter.FAVORITE, label: 'slots.menu_favorite', icon: 'favorites' },
	{ value: SlotsFilter.NEW, label: 'slots.menu_new', icon: 'new' },
	{ value: SlotsFilter.HOT, label: 'slots.menu_hot', icon: 'hot' },
	{ value: SlotsFilter.POPULAR, label: 'slots.menu_like', icon: 'like' },
];
