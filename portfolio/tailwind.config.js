module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'synth-blue': '#2ee2fa',
        'synth-gold': '#ff8b39',
        'synth-green': '#70f1b9',
        'synth-grey': '#bbbbbb',
        'synth-pink': '#f92aad',
        'synth-purple-light': '#2a2139',
        'synth-purple-mid': '#241b2f',
        'synth-purple-dark': '#262335',
      },
      height: {
        page: '300%',
      },
      spacing: {
        '32.25': '8.25rem',
      },
      fontSize: {
        '6.5xl': ['4rem', '1'],
      },
      scale: {
        '106.5': '1.065',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
    fontFamily: {
      'fira-code': 'Fira Code, monospace',
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
};
