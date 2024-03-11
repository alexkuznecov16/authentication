module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
		'no-var-requires': 'off', // Добавлено правило для разрешения использования require
	},
	parserOptions: {
		ecmaVersion: 2020, // или более поздняя версия
		sourceType: 'module',
	},
};
