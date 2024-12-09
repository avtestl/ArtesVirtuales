/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"main": "#D1E0EB",
				"dark-text": "#2F2E41"
			}
		},
	},
	plugins: [],
}
