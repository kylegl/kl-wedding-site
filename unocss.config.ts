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
      'flex-center': 'items-center justify-center',
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
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'bg-d1 bg-l1'.split(' '),
})
