module.exports = {
	// this will check Typescript files
	'**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

	// This will lint and format TypeScript and //JavaScript files
	'**/*.(ts|tsx|js)': filenames => [
		`pnpm eslint --fix ${filenames.map(x => `"${x}"`).join(' ')}`,
		`pnpm prettier --write ${filenames.map(x => `"${x}"`).join(' ')}`,
	],

	// this will Format MarkDown and JSON
	'**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.map(x => `"${x}"`).join(' ')}`,
	'**/*.scss': filenames => [`pnpm stylelint --fix ${filenames.map(x => `"${x}"`).join(' ')}`],
};
