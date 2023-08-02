import React from 'react';

import { SPORTS_SECTION_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const SportsSubMenu = (props: { openModal: () => void }) => {
	return (
		<>
			{SPORTS_SECTION_EN.map((sports, idx) => {
				const key = sports.playText.toString() + idx;
				const linkProps = [...sports.linkProps];

				if (!idx) {
					const additionalProp = { onClick: props.openModal };

					linkProps[1] = { ...linkProps[1], ...additionalProp };
				}

				return (
					<MainContent
						key={key}
						sectionClassNames={sports.sectionClassNames}
						wrapperClassNames={sports.wrapperClassNames}
						contentClassNames={sports.contentClassNames}
						linkProps={linkProps}
						hovClassNames={sports.hovClassNames}
						menuClassNames={sports.menuClassNames}
						imgProps={sports.imgProps}
						playClassNames={sports.playClassNames}
						playText={sports.playText}
					/>
				);
			})}
		</>
	);
};

export default SportsSubMenu;
