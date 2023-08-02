export const HOME_SECTIONS_EN = [
	// EN
	{
		sectionClassNames: ['subMenu__subSectionMainz'],
		wrapperClassNames: [],
		contentClassNames: ['subMenu__sectionContent'],
		linkProps: [{ href: `/sponsor`, target: '_blank' }],
		hovClassNames: ['subMenu__subHovMainz'],
		menuClassNames: ['subMenu__homeMenuMainz'],
		imgProps: [
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/sponsor-player.png',
					alt: 'mainz05',
					width: 412,
					height: 149,
					className: 'subMenu__sponsorPlayer',
				},
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/mainzlogo-en.png',
					alt: 'mainz05',
					width: 451,
					height: 97,
					className: 'subMenu__mainzLogo',
				},
			],
		],
		playClassNames: ['subMenu__subPlayMainz'],
		playText: ['sub_menu.home_mainz05'],
	},
	{
		sectionClassNames: ['subMenu__subSectionVip'],
		wrapperClassNames: [],
		contentClassNames: ['subMenu__sectionContent2'],
		linkProps: [
			{ href: `/vip`, target: '_blank' },
			{ href: `/rewards`, target: '_blank' },
			{ href: `/information/Terms`, target: '_blank' },
		],
		hovClassNames: ['subMenu__subHovVip', 'subMenu__subHovRewards', 'subMenu__subHovInfo'],
		menuClassNames: ['subMenu__homeMenuVip', 'subMenu__homeMenuRewards', 'subMenu__homeMenuInfoCenter'],
		imgProps: [
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/vip-girls.png',
					alt: 'vip girls',
					width: 196,
					height: 149,
					className: 'subMenu__vipGirls',
				},
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/viplogo.png',
					alt: 'vip logo',
					width: 145,
					height: 56,
					className: 'subMenu__vipLogo',
				},
			],
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/reward-item.png',
					alt: 'reward item',
					width: 309,
					height: 116,
					className: 'subMenu__rewardItem',
				},
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/rewardlogo-en.png',
					alt: 'reward logo',
					width: 95,
					height: 14,
					className: 'subMenu__rewardLogo',
				},
			],
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/infoman.png',
					alt: 'infoImage',
					width: 198,
					height: 149,
					className: 'subMenu__infoMan',
				},
				{
					src: 'https://cdn.hanwei1234.com/Content/images/navigation/home/infologo-en.png',
					alt: 'infoLogo',
					width: 133,
					height: 68,
					className: 'subMenu__infoLogo',
				},
			],
		],
		playClassNames: ['subMenu__subPlayVip', 'subMenu__subPlayRewards', 'subMenu__subPlayInfoCenter'],
		playText: ['sub_menu.home_vip', 'sub_menu.home_rewards', 'sub_menu.home_info_center'],
	},
];
