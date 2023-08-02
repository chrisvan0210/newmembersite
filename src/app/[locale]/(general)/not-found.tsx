import { useTranslations } from 'next-intl';

import styles from '../root.module.scss';

// Note that `app/[locale]/(general)/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
	const t = useTranslations();
	return (
		<div className={styles.pageNotFound}>
			<div className={styles.pageNotFound__inner}>
				<h2 className={styles.pageNotFound__title}>{t('common.oops')}</h2>
				<h3 className={styles.pageNotFound__description}>{t('common.page_not_found')}</h3>
			</div>
		</div>
	);
}
