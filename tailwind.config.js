module.exports = {
mode: 'jit',
  content: [
    'src/components/**/*.html',
  ],
  theme: {
      fontFamily: {
          sans: ['sans-serif'],
          serif: ["serif"],
          "caveat": ["var(--font-caveat)"],
          "caveat-bold": ["var(--font-caveat-bold)"],
          "poppins-light": ["var(--font-poppins-light)"],
          "poppins-light-italic": ["var(--font-poppins-light-italic)"],
          "poppins-regular": ["var(--font-poppins-regular)"],
          "poppins-italic": ["var(--font-poppins-italic)"],
          "poppins-bold": ["var(--font-poppins-bold)"],
          "poppins-bold-italic": ["var(--font-poppins-bold-italic)"],
          "heading": ["var(--font-poppins-bold)"],
          "body": ["var(--font-poppins-regular)"]
      },
      colors: {
          transparent: 'transparent',
          white: "var(--color-white)",
          black: "var(--color-black)",
          "deep-grey": {
              lighter: "var(--color-deep-grey-lighter)",
              light: "var(--color-deep-grey-light)",
              DEFAULT: "var(--color-deep-grey)",
              dark: "var(--color-deep-grey-dark)",
              darker: "var(--color-deep-grey-darker)",
          },
          "yellow": {
              lighter: "var(--color-yellow-lighter)",
              light: "var(--color-yellow-light)",
              DEFAULT: "var(--color-yellow)",
              dark: "var(--color-yellow-dark)",
              darker: "var(--color-yellow-darker)",
          },
          "aqua": {
              lighter: "var(--color-aqua-lighter)",
              light: "var(--color-aqua-light)",
              DEFAULT: "var(--color-aqua)",
              dark: "var(--color-aqua-dark)",
              darker: "var(--color-aqua-darker)",
          },
          "plum": {
              lighter: "var(--color-plum-lighter)",
              light: "var(--color-plum-light)",
              DEFAULT: "var(--color-plum)",
              dark: "var(--color-plum-dark)",
              darker: "var(--color-plum-darker)",
          },
          "amethyst": {
              lighter: "var(--color-amethyst-lighter)",
              light: "var(--color-amethyst-light)",
              DEFAULT: "var(--color-amethyst)",
              dark: "var(--color-amethyst-dark)",
              darker: "var(--color-amethyst-darker)",
          },
          "watermelon": {
              lighter: "var(--color-watermelon-lighter)",
              light: "var(--color-watermelon-light)",
              DEFAULT: "var(--color-watermelon)",
              dark: "var(--color-watermelon-dark)",
              darker: "var(--color-watermelon-darker)",
          },
          "blue": {
              lighter: "var(--color-blue-lighter)",
              light: "var(--color-blue-light)",
              DEFAULT: "var(--color-blue)",
              dark: "var(--color-blue-dark)",
              darker: "var(--color-blue-darker)",
          }
      },
      fontSize: {
          "58px": ["var(--text--58px)","var(--leading--60px)"],
          "46px": ["var(--text--46px)","var(--leading--52px)"],
          "36px": ["var(--text--36px)","var(--leading--48px)"],
          "32px": ["var(--text--32px)","var(--leading--36px)"],
          "28px": ["var(--text--28px)","var(--leading--32px)"],
          "24px": ["var(--text--24px)","var(--leading--28px)"],
          "22px": ["var(--text--22px)","var(--leading--28px)"],
          "16px": ["var(--text--16px)","var(--leading--24px)"],
          "14px": ["var(--text--14px)","var(--leading--16px)"],
          "12px": ["var(--text--12px)","var(--leading--16px)"],
          "10px": ["var(--text--10px)","var(--leading--16px)"]
      },
      screens: {
        'xs': '25rem', // ~400px
        'sm': '37.5rem', // ~600px
        'md': '64rem', // ~1024px
        'lg': '72.5rem' // ~1160px
      },
      spacing: {
          // https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179/
          0: 0,
          2: "var(--space-xxxs)",
          4: "var(--space-xxs)",
          8: "var(--space-xs)",
          16: "var(--space-sm)",
          24: "var(--space-md)",
          32: "var(--space-lg)",
          40: "var(--space-xl)",
          48: "var(--space-xxl)",
          64: "var(--space-xxxl)",
          80: "var(--space-xxxxl)",
          160: "var(--space-xxxxxl)",
      },
      extend: {},
    },
}