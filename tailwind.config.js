/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ["ComicSansMS", "sans-serif"],
        potta: ["PottaOne-Regular", "sans-serif"],
      },
      colors: {
        "gradientStartColor": "var(--gradient-start-color)",
        "gradientEndColor": "var(--gradient-end-color)",
        "bgColorGreen": "var(--bg-color-green)",
        "bgColorViolet": "var(--bg-color-violet)",
        "bgColorBlue": "var(--bg-color-blue)",
        "bgColorYellow": "var(--bg-color-yellow)",
        "bgColorPink": "var(--bg-color-pink)",
      },
      backgroundImage: {
        'bgMain1': "url('/src/assets/images/bg-main-1.png')",
        'bgMain2': "url('/src/assets/images/bg-main-2.png')",
        'bgMain3': "url('/src/assets/images/bg-main-3.png')",
        'bgMain4': "url('/src/assets/images/bg-main-4.png')",
        'bgMain5': "url('/src/assets/images/bg-main-5.png')",
        'bgMain6': "url('/src/assets/images/bg-main-6.png')",
        'bgLoading': "url('/src/assets/images/loading-bg.png')",
      }
    },
  },
  plugins: [],
}