import localFont from 'next/font/local'

export const averta = localFont({
  src: [
    {
      path: '../public/fonts/AvertaDemoPE-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-averta',
  display: 'swap',
})
