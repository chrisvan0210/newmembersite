import React from 'react';

import { VIRTUAL_SPORTS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const VirtualSportsSubMenu = () => {
	return (
		<>
			{VIRTUAL_SPORTS_EN.map((virtualSports, idx) => {
				const key = virtualSports.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={virtualSports.sectionClassNames}
						wrapperClassNames={virtualSports.wrapperClassNames}
						contentClassNames={virtualSports.contentClassNames}
						linkProps={virtualSports.linkProps}
						hovClassNames={virtualSports.hovClassNames}
						menuClassNames={virtualSports.menuClassNames}
						imgProps={virtualSports.imgProps}
						playClassNames={virtualSports.playClassNames}
						playText={virtualSports.playText}
					/>
				);
			})}
		</>
	);
};

export default VirtualSportsSubMenu;
