/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) both',
                'slide-up': 'slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) both',
            },
            keyframes: {
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideUp: {
                    'from': { transform: 'translateY(40px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
} 