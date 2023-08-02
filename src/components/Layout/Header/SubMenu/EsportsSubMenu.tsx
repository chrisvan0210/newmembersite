import React from 'react';

import { ESPORTS_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const EsportsSubMenu = () => {
	return (
		<>
			{ESPORTS_SECTIONS_EN.map((esports, idx) => {
				const key = esports.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={esports.sectionClassNames}
						wrapperClassNames={esports.wrapperClassNames}
						contentClassNames={esports.contentClassNames}
						linkProps={esports.linkProps}
						hovClassNames={esports.hovClassNames}
						menuClassNames={esports.menuClassNames}
						imgProps={esports.imgProps}
						playClassNames={esports.playClassNames}
						playText={esports.playText}
					/>
				);
			})}
		</>
	);
};

export default EsportsSubMenu;
