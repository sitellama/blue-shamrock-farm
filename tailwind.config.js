/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins', 'Arial', 'sans-serif'],
                'headings': ['Porcelain', 'Arial', 'sans-serif'],
            },
            colors: {
                'page-bg': '#EDECE7',
                'blue-light': '#617798',
                'blue-medium': '#45536E',
                'blue-dark': '#23374F',
                'brown': '#8F5C49',
                'tan': '#9D8374',
            },
            flex: {
                '1': '1 1 50%',
            },
        },
    },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
    ],
}

