export const GAMES_SECTIONS_EN = [
	{
		sectionClassNames: ['subMenu__subSectionGames'],
		wrapperClassNames: [],
		contentClassNames: ['subMenu__sectionContentGames'],
		linkProps: [
			{ href: '/games/FishermenGold', target: '_blank' },
			{ href: '/games/LustrousOcean', target: '_blank' },
		],
		hovClassNames: ['subMenu__subHovFishermanGold', 'subMenu__subHovLustrousOcean'],
		menuClassNames: ['subMenu__gamesMenuFishermanGold', 'subMenu__gamesMenuLustrousOcean'],
		spanClassNames: ['subMenu__fishermanGold'],
		newSubName: [
			{
				'sub_menu.games_lustrous_ocean': 'sub_menu.games_new',
			},
		],
		newClassNames: ['subMenu__subNameLustrousNew'],
		subName: ['sub_menu.games_fishermen_gold', 'sub_menu.games_lustrous_ocean'],
		subNameClassNames: ['subMenu__subNameFisherman', 'subMenu__subNameLustrous'],
		imgProps: [
			[],
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/games/nav-lustrous-ocean.png',
					width: 144,
					height: 114,
					alt: 'lustrous',
				},
			],
		],
		playClassNames: ['subMenu__subPlayFishermanGold', 'subMenu__subPlayLustrousOcean'],
		playText: ['sub_menu.games_play_now', 'sub_menu.games_play_now'],
	},
];
