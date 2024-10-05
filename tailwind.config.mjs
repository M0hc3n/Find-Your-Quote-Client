/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',     
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
		},
		colors: {
			"bg__main": "#F2F4F7", 
			"custom__white": "#FCFCFC", 
			"custom__green": "#92E3A9",
		}
	},
	plugins: [],
	darkMode: true,   
	plugins: [nextui()]
}
