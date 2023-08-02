import React from 'react';

import { GAMES_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const GamesSubMenu = () => {
	return (
		<>
			{GAMES_SECTIONS_EN.map((game, idx) => {
				const key = game.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={game.sectionClassNames}
						wrapperClassNames={game.wrapperClassNames}
						contentClassNames={game.contentClassNames}
						linkProps={game.linkProps}
						hovClassNames={game.hovClassNames}
						menuClassNames={game.menuClassNames}
						spanClassNames={game.spanClassNames}
						newSubName={game.newSubName}
						newClassNames={game.newClassNames}
						subName={game.subName}
						subNameClassNames={game.subNameClassNames}
						imgProps={game.imgProps}
						playClassNames={game.playClassNames}
						playText={game.playText}
					/>
				);
			})}
		</>
	);
};

export default GamesSubMenu;
