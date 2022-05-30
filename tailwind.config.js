/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		screens: {
			mobile: '375px',
			tablet: '768px',
			desktop: '1024px',
			desktopLarge: '1170px',
			wide: '1280px',
		},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			black: '#000000',
			grey: '#636363',
			darkTypo: '#002033',
			safetyOrange: '#ff6a00',
			kashmirBlue: '#58667E',
			hemp: '#987C6F',
			limeGreen: '#16C612',
			cinnabar: '#EA2626',
			blackPearl: '#002033',
			terracotta: '#9F4505',
			terracottaLightTrnsp: '#FF6A0000',
			cursedBlack: '#131313',
			lunarRock: '#c5c5c5',
			blue: '#004168',
			coldGrey: '#9f9f9f',
			grayTypo: '#9a9ea6',
			solitude: '#e3ebfd',
			royalBlue: '#4475f2',
		},
		fontSize: {
			xxs: '0.6875rem',
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.750rem',
			'4xl': '2.5rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		container: {
			screens: {
				mobile: '100%',
				tablet: '100%',
				desktop: '100%',
				wide: '1845px',
			},
		},
		extend: {
			width: {
				128: '32rem',
				'11/20': '55%',
			},
			minWidth: {
				40: '10rem',
				96: '20rem',
				120: '30rem',
			},
			spacing: {
				18: '4.5rem',
				6.5: '1.625rem',
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(160px, 1fr))',
			},
			boxShadow: {
				header: '0 4px 77px 0 rgba(0, 0, 0, 0.35)',
				primary: '0 6px 25px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['odd', 'even'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('tailwind-scrollbar-hide'),
	],
};
