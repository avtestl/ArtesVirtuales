/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"main": "#D1E0EB",
				"dark-text": "#2F2E41"
			},
			width: {
				'28': '15rem', // Cambia el valor de w-28
			  },
			  height: {
				'28': '15rem', // Cambia el valor de h-28
			  },
		},
	},
	plugins: [],
}
