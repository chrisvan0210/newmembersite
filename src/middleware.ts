import createMiddleware from 'next-intl/middleware';

import { Locale } from '@/enums/app';

export default createMiddleware({
	locales: [Locale.EN, Locale.VN, Locale.TH, Locale.CN],
	defaultLocale: Locale.EN,
});

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
