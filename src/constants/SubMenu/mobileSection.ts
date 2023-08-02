export const MOBILE_SECTIONS_EN = [
	{
		sectionClassNames: ['subMenu__subSectionMobile'],
		wrapperClassNames: [],
		contentClassNames: ['subMenu__sectionContentMobile'],
		linkProps: [
			{ href: '/mobile#qrcodesports', target: '_self' },
			{ href: '/mobile#qrcodemain', target: '_self' },
		],
		hovClassNames: ['subMenu__subHovSportsApp', 'subMenu__subHovMainApp'],
		menuClassNames: ['subMenu__mobileMenuSports', 'subMenu__mobileMenuMain'],
		imgProps: [
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/mobile/new/fb88sports.png',
					width: 110,
					height: 108,
					alt: 'fb88sports logo',
					className: 'subMenu__fb88sports',
				},
			],
			[
				{
					src: 'https://cdn.hanwei1234.com/Content/images/mobile/new/fb88-app.png',
					width: 110,
					height: 108,
					alt: 'fb88app logo',
					className: 'subMenu__fb88app',
				},
			],
		],
		descContent: [
			[
				{
					title: 'sub_menu.mobile_sports_title',
					description: 'sub_menu.mobile_sports_description',
				},
			],
			[
				{
					title: 'sub_menu.mobile_main_title',
					description: 'sub_menu.mobile_main_description',
				},
			],
		],
		descClassNames: ['subMenu__sportsDescription', 'subMenu__mainDescription'],
		titleClassNames: ['subMenu__descriptionTitle'],
		playClassNames: ['subMenu__subPlaySportsApp', 'subMenu__subPlayMainApp'],
		playText: ['sub_menu.mobile_download_sports', 'sub_menu.mobile_download_main'],
	},
];
