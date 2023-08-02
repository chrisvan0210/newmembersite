import React from 'react';

import { HOME_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const HomeSubMenu = () => {
	return (
		<>
			{HOME_SECTIONS_EN.map((home, idx) => {
				const key = home.playText.toString() + idx;
				return (
					<MainContent
						key={key}
						sectionClassNames={home.sectionClassNames}
						wrapperClassNames={home.wrapperClassNames}
						contentClassNames={home.contentClassNames}
						linkProps={home.linkProps}
						hovClassNames={home.hovClassNames}
						menuClassNames={home.menuClassNames}
						imgProps={home.imgProps}
						playClassNames={home.playClassNames}
						playText={home.playText}
					/>
				);
			})}
		</>
	);
};

export default HomeSubMenu;
