import type { SlotsCategory, SlotsFilter } from '@/enums/menu-selection';

type SlotMenuType = {
	label: string;
	icon: string;
};

export interface SlotsTopMenuType extends SlotMenuType {
	value: SlotsCategory;
}
export interface SlotsBottomMenuType extends SlotMenuType {
	value: SlotsFilter;
}
