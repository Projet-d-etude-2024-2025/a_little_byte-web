// @ts-check

import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
	{
		files: ["**/*.{ts,tsx}"],
		ignores: ["src/ui", "src/shadcn-ui.css"],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
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
