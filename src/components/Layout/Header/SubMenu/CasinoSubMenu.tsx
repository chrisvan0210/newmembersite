import React from 'react';

import { CASINO_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const CasinoSubMenu = () => {
	return (
		<>
			{CASINO_SECTIONS_EN.map((casino, idx) => {
				const key = casino.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={casino.sectionClassNames}
						wrapperClassNames={casino.wrapperClassNames}
						contentClassNames={casino.contentClassNames}
						linkProps={casino.linkProps}
						hovClassNames={casino.hovClassNames}
						menuClassNames={casino.menuClassNames}
						spanClassNames={casino.spanClassNames}
						newSubName={casino.newSubName}
						newClassNames={casino.newClassNames}
						subName={casino.subName}
						subNameClassNames={casino.subNameClassNames}
						playClassNames={casino.playClassNames}
						playText={casino.playText}
					/>
				);
			})}
		</>
	);
};

export default CasinoSubMenu;
