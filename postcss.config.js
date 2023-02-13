module.exports = {
	parser: 'postcss-scss',
	plugins: {
		'postcss-import': {},
		'@csstools/postcss-sass': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
	}
}