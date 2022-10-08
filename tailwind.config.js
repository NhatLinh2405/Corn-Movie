/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff3231",
			},
			backgroundImage: {
				bannerImg: "url('./assets/banner.jpg')",
				bgfooter: "url('./assets/bgFooter.jpg')",
				bgContact: "url('./assets/bgContact.jpg')",
			},
			boxShadow: {
				pop: "0 .5rem 1.5rem rgba(0,0,0,.1)",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
