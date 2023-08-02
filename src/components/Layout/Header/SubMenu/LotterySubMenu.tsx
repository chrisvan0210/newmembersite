import React from 'react';

import { LOTTERY_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const LotterySubMenu = () => {
	return (
		<>
			{LOTTERY_SECTIONS_EN.map((lottery, idx) => {
				const key = lottery.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={lottery.sectionClassNames}
						wrapperClassNames={lottery.wrapperClassNames}
						contentClassNames={lottery.contentClassNames}
						linkProps={lottery.linkProps}
						hovClassNames={lottery.hovClassNames}
						menuClassNames={lottery.menuClassNames}
						imgProps={lottery.imgProps}
						playClassNames={lottery.playClassNames}
						playText={lottery.playText}
					/>
				);
			})}
		</>
	);
};

export default LotterySubMenu;
