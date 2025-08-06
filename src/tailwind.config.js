module.exports = {
    darkMode: 'class',
    content: ['./index.html'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgb(14 165 233 / 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgb(14 165 233 / 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
