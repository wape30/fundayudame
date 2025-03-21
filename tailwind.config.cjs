/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
				'./node_modules/flowbite/**/*.js'
	],
	theme: {
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			'2xl': "1536px",
		},
		container: {
			center: true, // does mx-auto on all containers by default
		},
		extend: {
			colors: {
				primary: colors.blue,
				base: colors.gray,
				info: "#7dd3fc",
				"info-content": "#082f49",
				success: "#6ee7b7",
				"success-content": "#022c22",
				warning: "#fcd34d",
				"warning-content": "#111827",
				error: "#fca5a5",
				"error-content": "#450a0a",
			},
			backgroundImages: {
				'hero': "url('./src/assets/images/hero.jpg')",
			}
		},
		fontFamily: {
			sans: [
				"Inter",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
			],
			mono: [
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"),require('flowbite/plugin')],
};
