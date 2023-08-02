import '@/styles/main.scss';

import { createTranslator, NextIntlClientProvider } from 'next-intl';

import { getLocales } from '@/utils/app';

import styles from './rewards.module.scss';

type Props = {
	children: React.ReactNode;
	params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	const messages = await getLocales(locale);
	const t = createTranslator({ locale, messages });
	return {
		title: t('metadata.title'),
		description: t('metadata.description'),
	};
}

export default async function RootLayout({ children, params: { locale } }: Props) {
	const messages = await getLocales(locale);
	return (
		<html lang={locale}>
			<body className={styles.mainBody} data-lang={locale}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
