import React from 'react';

import { SLOTS_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const SlotsSubMenu = () => {
	return (
		<>
			{SLOTS_SECTIONS_EN.map((slot, idx) => {
				const key = slot.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={slot.sectionClassNames}
						wrapperClassNames={slot.wrapperClassNames}
						contentClassNames={slot.contentClassNames}
						linkProps={slot.linkProps}
						hovClassNames={slot.hovClassNames}
						menuClassNames={slot.menuClassNames}
						spanClassNames={slot.spanClassNames}
						newSubName={slot.newSubName}
						newClassNames={slot.newClassNames}
						subName={slot.subName}
						subNameClassNames={slot.subNameClassNames}
						playClassNames={slot.playClassNames}
						playText={slot.playText}
					/>
				);
			})}
		</>
	);
};

export default SlotsSubMenu;
