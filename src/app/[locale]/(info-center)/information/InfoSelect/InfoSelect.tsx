import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { INFO_OPTIONS } from '@/constants/infoCenter';

import styles from './index.module.scss';

function InfoSelect({ activeTab }: { activeTab: number }) {
	const t = useTranslations();

	return (
		<div className={styles.header}>
			{INFO_OPTIONS.map((info, i) => (
				<Link key={info.label} href={info.link} className={styles.header__select}>
					<Image
						src={activeTab === i ? info.iconSelected : info.icon}
						width={info.width}
						height={info.height}
						alt={info.label}
						className={styles.header__selectIcon}
					/>
					<span
						className={classNames(styles.header__selectLabel, {
							[styles['header__selectLabel--selected']]: activeTab === i,
						})}
					>
						{t(`info_center.${info.label}`)}
					</span>
				</Link>
			))}
		</div>
	);
}

export default InfoSelect;
