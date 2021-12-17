module.exports = {
  mode: 'jit',
  purge: [
    './src/**/**/*.tsx',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        inter: 'Inter',
      },
      fontSize: {
        3.25: '0.8125rem',
        8: '2rem',
        10: '2.5rem',
        14: '3.5rem',
        16: '4rem',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          shade: 'var(--color-primary-shade)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          shade1: 'var(--color-secondary-shade1)',
          shade2: 'var(--color-secondary-shade2)',
          shade3: 'var(--color-secondary-shade3)',
          shade4: 'var(--color-secondary-shade4)',
          shade5: 'var(--color-secondary-shade5)',
          shade6: 'var(--color-secondary-shade6)',
          shade7: 'var(--color-secondary-shade7)',
        },
        accent1: {
          DEFAULT: 'var(--color-accent1)',
          shade1: 'var(--color-accent1-shade1)',
          shade2: 'var(--color-accent1-shade2)',
        },
        accent2: {
          DEFAULT: 'var(--color-accent2)',
          shade1: 'var(--color-accent2-shade1)',
          shade2: 'var(--color-accent2-shade2)',
          shade3: 'var(--color-accent2-shade3)',
          shade4: 'var(--color-accent2-shade4)',
        },
        dark: {
          DEFAULT: 'var(--color-dark)',
          shade1: 'var(--color-dark-shade1)',
          shade2: 'var(--color-dark-shade2)',
          shade3: 'var(--color-dark-shade3)',
          shade4: 'var(--color-dark-shade4)',
          shade5: 'var(--color-dark-shade5)',
        },
        green: {
          DEFAULT: 'var(--color-green)',
          light: 'var(--color-green-light)',
        },
        blue: {
          light: 'var(--color-blue-light)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          deactive: 'var(--color-text-deactive)',
          'deactive-light': 'var(--color-text-deactive-light)',
        },
        link: {
          DEFAULT: 'var(--color-link)',
        }
      },
      letterSpacing: {
        tightest: '-0.0625em',
        tight: '-0.03125em',
      },
      lineHeight: {
        tighter: '1.125',
        4.5: '1.125rem',
        16: '4rem',
        22: '5.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
