import type { Config } from "tailwindcss"
import tailwindPreset from "@alittlebyte/components/tailwind.config"

const config: Config = {
	presets: [tailwindPreset],
	content: ["src/**/*.{ts,tsx}", "../../packages/components/src/**/*.{ts,tsx}"],
}

export default config
