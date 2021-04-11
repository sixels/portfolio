const colors = require("tailwindcss/colors")

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                "Epilogue",
                "Roboto",
                "Segoe UI",
                "Fira Sans",
                "Helvetica Neue",
                "sans-serif",
            ],
        },
        colors: {
            gray: {
                DEFAULT: "#2D2D34",
                50: "#F3F3F4",
                100: "#DBDBE1",
                200: "#ACACB9",
                300: "#7E7E91",
                400: "#545463",
                500: "#2D2D34",
                600: "#26262C",
                700: "#1E1E24",
                800: "#17171C",
                900: "#101013",
            },

            primary: {
                100: "#cdf7ec",
                200: "#9befd9",
                300: "#6ae6c6",
                400: "#38deb3",
                500: "#06d6a0",
                600: "#05ab80",
                700: "#048060",
                800: "#025640",
                900: "#012b20",
            },
        },
    },
    prefix: "tw-",
}
