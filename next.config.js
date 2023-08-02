/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
	// This is the default (also the `src` folder is supported out of the box)
	'./src/i18n.ts',
);

const nextConfig = {
	// fix error className does not match
	// compiler: {
	// 	styledComponents: true,
	// },
	sassOptions: {
		additionalData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_mixins.scss";
        `,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.hanwei1234.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'www.fb88big.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'blogfb88no1.com',
				port: '',
			},
		],
		allowFutureImage: true,
	},
};

module.exports = withNextIntl(nextConfig);
