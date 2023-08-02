'use client';

import InfoSelect from '../InfoSelect';
import styles from './page.module.scss';

function Terms() {
	return (
		<div className={styles.container}>
			<InfoSelect activeTab={2} />
		</div>
	);
}

export default Terms;
