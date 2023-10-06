import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        market:
          'url(https://e0.pxfuel.com/wallpapers/100/15/desktop-wallpaper-reflections-in-a-supermarket-a-poem-grocery-gift-card-supermarket-supermarket-design-grocery-shopping.jpg)',
      },
    },
  },
  plugins: [],
}
export default config
