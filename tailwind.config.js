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
        extend: {},
    },
    variants: {
        extend: {
        },
    },
    plugins: [],
    prefix: "tw-",
}
