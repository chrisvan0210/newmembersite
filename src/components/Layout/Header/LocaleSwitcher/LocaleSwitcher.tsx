'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';

import { COUNTRY_INFO_LIST } from '@/constants/app';

import styles from './index.module.scss';

function LocaleSwitcher({ flag }: { flag: string }) {
	const lang = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function handleChangeLanguage(locale: string) {
		router.replace(`/${locale}${pathname}`);
	}

	return (
		<div className={styles.container}>
			<ul>
				<li className={styles.main}>
					<Image src={flag} width={20} height={20} alt={lang} />
					<ul className={styles.list}>
						{COUNTRY_INFO_LIST.map(
							item =>
								item.code !== lang && (
									<li key={item.code}>
										<button type="button" onClick={() => handleChangeLanguage(item.code)} className={styles.button}>
											{item.label}
											<Image src={item.flag} width={20} height={20} alt={item.label} />
										</button>
									</li>
								),
						)}
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default LocaleSwitcher;
