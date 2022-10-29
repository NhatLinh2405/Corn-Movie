/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
		extend: {
			colors: {
				primary: "#ff3231",
			},
			backgroundImage: {
				bannerImg: "url('./assets/banner.jpg')",
				bgfooter: "url('./assets/bgFooter.jpg')",
				bgContact: "url('./assets/bgContact.jpg')",
				bgLogin: "url('./assets/bgLogin.jpg')",
			},
			boxShadow: {
				pop: "0 .5rem 1.5rem rgba(0,0,0,.1)",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
