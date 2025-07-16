/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        serif: ["var(--font-garamond)"],
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '65ch',
            color: 'var(--foreground)',
            p: {
              color: 'var(--foreground)',
              opacity: 0.8,
            },
            a: {
              color: 'var(--foreground)',
              '&:hover': {
                color: 'var(--foreground)',
                opacity: 0.8,
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': '#fafafa',
          '--foreground': '#171717',
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--background': '#0a0a0a',
            '--foreground': '#ededed',
          },
        },
      })
    },
  ],
}
