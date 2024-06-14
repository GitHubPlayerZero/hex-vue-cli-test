module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// quotes: ["error", "double"],
		quotes: "off",	// 關閉字串單雙引號檢查

		// 使用 tab 縮排
		indent: ["error", "tab"],
		// "no-tabs": ["error", { allowIndentationTabs: true }],
		"no-tabs": "off",

		// 允許在 label 中包入 VeeValidation 的 Field 元件
		// 'vuejs-accessibility/label-has-for': [
		// 	'error',
		// 	{
		// 		components: ['Label'],
		// 		// controlComponents: ['input', 'Field'],
		// 		controlComponents: ['input', 'vee-field'],
		// 		required: {
		// 			every: ['nesting', 'id'],
		// 		},
		// 		allowChildren: false,
		// 	},
		// ],

		// 關閉 label 檢查
		'vuejs-accessibility/label-has-for': 'off',

		// 不檢查函式參數括號前空白
		// "space-before-function-paren": ["error", {
		// 	"anonymous": "ignore",
		// 	"named": "ignore",
		// 	"asyncArrow": "ignore"
		// }],
		"space-before-function-paren": "off",

		// 不檢查函式和它的括號之間的空白
		"func-call-spacing": "off",
		"no-spaced-func": "off",

		// 不強制解構
		"prefer-destructuring": "off",

		// 允許空行及註解的空格
		"no-trailing-spaces": ["error", {
			skipBlankLines: true,
			ignoreComments: true,
		}],

		// 允許空白的行數
		"no-multiple-empty-lines": ["error", {
			"max": 3,
		}],
		
		// 不檢查函式中沒有使用的參數
		"no-unused-vars": ["error", {
			"args": "none",
		}],
	},
};
