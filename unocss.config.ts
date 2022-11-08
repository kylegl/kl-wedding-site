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

export default defineConfig({
  shortcuts: [
    {
      'btn': 'px3 py4 rounded-md inline-block cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
      'btn-hover': 'hover:translate-y--.5 in-out',
      't-inv': 'text-bgA',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Cormorant Garamond:300,500,700,900',
        serif: 'PT Serif',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      bgA: '#FDFDFD',
      bgB: '#dfe0e1',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
