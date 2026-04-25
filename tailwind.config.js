export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mainDark: "var(--mainDark)",
                mainLight: "var(--mainLight)",
            },
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			}
        },
    },
    plugins: [],
};