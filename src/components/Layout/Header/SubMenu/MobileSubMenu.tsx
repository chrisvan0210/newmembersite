import React from 'react';

import { MOBILE_SECTIONS_EN } from '@/constants/SubMenu/subMenu';

import MainContent from './MainContent';

const MobileSubMenu = () => {
	return (
		<>
			{MOBILE_SECTIONS_EN.map((mobile, idx) => {
				const key = mobile.playText.toString() + idx;

				return (
					<MainContent
						key={key}
						sectionClassNames={mobile.sectionClassNames}
						wrapperClassNames={mobile.wrapperClassNames}
						contentClassNames={mobile.contentClassNames}
						linkProps={mobile.linkProps}
						hovClassNames={mobile.hovClassNames}
						menuClassNames={mobile.menuClassNames}
						imgProps={mobile.imgProps}
						descContent={mobile.descContent}
						descClassNames={mobile.descClassNames}
						titleClassNames={mobile.titleClassNames}
						playClassNames={mobile.playClassNames}
						playText={mobile.playText}
					/>
				);
			})}
		</>
	);
};

export default MobileSubMenu;
