'use client';

import InfoSelect from '../InfoSelect';
import styles from './page.module.scss';

function RulesLive() {
	return (
		<div className={styles.container}>
			<InfoSelect activeTab={3} />
		</div>
	);
}

export default RulesLive;
