import Link from 'next/link';
import { useTranslations } from 'next-intl';

import CustomButton from '@/components/CustomButton';
import FontIcon from '@/components/FontIcon';
import { PAYMENT_SECURITY } from '@/constants/footer';
import { Locale } from '@/enums/app';
import { getPaymentInfoByLang } from '@/utils/app';

import styles from './index.module.scss';

function PaymentInfo({ locale }: { locale: Locale }) {
	const t = useTranslations();
	const paymentInfo = getPaymentInfoByLang(locale);
	return (
		<div className={styles.container}>
			<div>
				<label htmlFor="payment_method">{t('common.payment_method')}</label>
				<div className={styles.container__links}>
					{paymentInfo.map(item => {
						if (locale === Locale.EN) {
							return (
								<Link key={item.name} href={item.link} target="_blank">
									<FontIcon name={item.name} size={item.size} className={styles.container__icons} />
								</Link>
							);
						}
						return <FontIcon key={item.name} name={item.name} size={item.size} className={styles.container__icons} />;
					})}
					{(locale === Locale.VN || locale === Locale.TH) && (
						<CustomButton small>
							<Link href="/cashier" target="_blank">
								{t('common.view_more')}
							</Link>
						</CustomButton>
					)}
				</div>
			</div>
			<div className={styles.container__security}>
				<label htmlFor="security">{t('common.security')}</label>
				<div className={styles.container__links}>
					{PAYMENT_SECURITY.map(security => (
						<Link href={security.link} key={security.icon} target="_blank">
							<FontIcon name={security.icon} size={40} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
export default PaymentInfo;
