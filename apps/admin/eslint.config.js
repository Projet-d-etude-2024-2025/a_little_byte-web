// @ts-check

import pluginJs from "@eslint/js"
import pluginQuery from "@tanstack/eslint-plugin-query"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	...pluginQuery.configs["flat/recommended"],
	pluginReact.configs.flat["jsx-runtime"],
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			"react/prop-types": 0,
		},
	},
]
