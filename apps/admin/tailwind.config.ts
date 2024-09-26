import tailwindPreset from "@alittlebyte/components/tailwind.config"
import type { Config } from "tailwindcss"

const config: Config = {
	presets: [tailwindPreset],
	content: ["src/**/*.{ts,tsx}", "../../packages/components/src/**/*.{ts,tsx}"],
}

export default config
