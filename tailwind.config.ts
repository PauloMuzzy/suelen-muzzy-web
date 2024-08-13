import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DED1CF',
        secondary: '#B49D8B',
        tertiary: '#8C7E74',
        quaternary: '#EDEAE5',
        quintenary: '#010E21',
        senary: '#D9D9D9',
      },
      backgroundImage: {
        'default-image': "url('/src/assets/background_image.svg')",
      },
    },
  },
  plugins: [nextui()],
}
export default config
