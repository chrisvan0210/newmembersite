'use client';

import InfoSelect from '../InfoSelect';
import styles from './page.module.scss';

function FAQAccount() {
	return (
		<div className={styles.container}>
			<InfoSelect activeTab={0} />
		</div>
	);
}

export default FAQAccount;
