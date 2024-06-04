/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"fs-xs": "clamp(10.24px, 0.04vi + 10.11px, 10.69px)",
				"fs-sm": "clamp(12.8px, 0.13vi + 12.38px, 14.25px)",
				"fs-base": "clamp(16px, 0.27vi + 15.14px, 19px)",
				"fs-md": "clamp(20px, 0.48vi + 18.48px, 25.33px)",
				"fs-lg": "clamp(25px, 0.78vi + 22.5px, 33.76px)",
				"fs-xl": "clamp(31.25px, 1.23vi + 27.32px, 45px)",
				"fs-xxl": "clamp(39.06px, 1.87vi + 33.08px, 59.99px)",
				"fs-xxxl": "clamp(48.83px, 2.78vi + 39.93px, 79.97px)",
			},
			
		},
	},
	plugins: [],
};
