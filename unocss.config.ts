import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  shortcuts: [
    {
      'btn': 'px3 py4 rounded-md inline-block cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
      'btn-hover': 'hover:translate-y--.5 in-out',
      'flex-center': 'items-center justify-center',
      'icon-airplane': 'i-majesticons:airplane-line',
      'icon-home': 'i-carbon-home text-2xl',
      'icon-menu': 'i-carbon:menu text-xl',
      'icon-x': 'i-carbon:close text-xl',
      'in-out': 'transition duration-200 ease-in-out',
      't-inv': 'text-l1',
      't-norm': 'text-zinc-900',
    },
    [/^(.*)-l(\d)$/, ([, m, c]) => `${m}-light${c}`],
    [/^(.*)-d(\d)$/, ([, m, c]) => `${m}-dark${c}`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetExtra(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Cormorant Garamond:300,500,700,900',
        fancy: 'Miss Fajardose',
        purplePurse: 'Purple Purse',
        alegreya: {
          name: 'Alegreya SC',
          weights: ['500'],
          italic: true,
        },
        serif: 'PT Serif',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    breakpoints: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      mdLg: '900px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      light1: '#FDFDFD',
      light2: '#dfe0e1',
      dark1: 'zinc-900',
      sandLight: '#F3ECE7',
      sand: '#DECABA',
      sandDark: '#D8B5A6',
      sandy: '#AAA39F',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'bg-d1 bg-l1'.split(' '),
})
