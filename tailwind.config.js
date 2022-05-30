/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px',
		},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			black: '#000000',
			grey: '#636363',
			darkTypo: '#002033',
			terracotta: '#9F4505',
			terracottaLightTrnsp: '#FF6A0000',
			cursedBlack: '#131313',
			lunarRock: '#c5c5c5',
			blue: '#004168',
			coldGrey: '#9f9f9f',
			grayTypo: '#9A9EA6',
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
			center: true,
			screens: {
				sm: '540px',
				md: '720px',
				lg: '960px',
				xl: '1140px',
				xxl: '1320px',
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
