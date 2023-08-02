import React, { useCallback } from 'react';

import type { Menu as MenuName } from '@/enums/app';
import { Menu } from '@/enums/app';

import CasinoSubMenu from './CasinoSubMenu';
import EsportsSubMenu from './EsportsSubMenu';
import GamesSubMenu from './GamesSubMenu';
import HomeSubMenu from './HomeSubMenu';
import styles from './index.module.scss';
import LotterySubMenu from './LotterySubMenu';
import MobileSubMenu from './MobileSubMenu';
import PromotionsSubMenu from './PromotionsSubMenu';
import SlotsSubMenu from './SlotsSubMenu';
import SportsSubMenu from './SportsSubMenu';
import VirtualSportsSubMenu from './VirtualSports';

const SubMenu = (props: { handleIsHovered: (status: boolean) => void; selectedNav: MenuName; onOpen: () => void }) => {
	const handleMouseOver = useCallback(() => props.handleIsHovered(true), []);
	const handleMouseOut = useCallback(() => props.handleIsHovered(false), []);

	const subMenuList = (listName: MenuName) => {
		switch (listName) {
			case Menu.home:
				return <HomeSubMenu />;
			case Menu.mobile:
				return <MobileSubMenu />;
			case Menu.sports:
				return <SportsSubMenu openModal={props.onOpen} />;
			case Menu.virtual_sports:
				return <VirtualSportsSubMenu />;
			case Menu.e_sports:
				return <EsportsSubMenu />;
			case Menu.casino:
				return <CasinoSubMenu />;
			case Menu.slots:
				return <SlotsSubMenu />;
			case Menu.games:
				return <GamesSubMenu />;
			case Menu.lottery:
				return <LotterySubMenu />;
			case Menu.promotions:
				return <PromotionsSubMenu />;
			default:
				return <HomeSubMenu />;
		}
	};

	return (
		<div className={styles.subMenu} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			{subMenuList(props.selectedNav)}
		</div>
	);
};

export default SubMenu;
