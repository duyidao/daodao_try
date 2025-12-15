import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const colors = {
  'primary': 'var(--color-primary)',
  'danger': 'var(--color-danger)',
  'success': 'var(--color-success)',
  'warning': 'var(--color-warning)',
  't-primary': 'var(--text-primary)',
  't-regular': 'var(--text-regular)',
  't-secondary': 'var(--text-secondary)',
  't-placeholder': 'var(--text-tertiary)',
  't-tertiary': 'var(--text-tertiary)',
  't-disabled': 'var(--text-disabled)',
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [
    [
      'font-jaf',
      {
        'font-family': 'JustAnotherFont',
      },
    ],
  ],
  theme: {
    colors: {
      'heading': colors['t-primary'],
      'major': colors['t-secondary'],
      'secondary': colors['t-placeholder'],
      'disabled': colors['t-disabled'],
      'primary-1': colors['brand-1'],
      'primary-2': colors['brand-2'],
      'primary-3': colors['brand-3'],
      'primary-4': colors['brand-4'],
      'primary-5': colors['brand-5'],
      'primary-6': colors.primary,
      'primary-7': colors['brand-7'],
      'primary-8': colors['brand-8'],
      'primary-9': colors['brand-9'],
      'primary-10': colors['brand-10'],
      'danger-1': '#FFECE8',
      'danger-2': '#FDCDC5',
      'danger-6': colors.danger,
      'success-1': '#E8FFEF',
      'success-2': '#C1F5D1',
      'success-6': colors.success,
      'warning-1': '#FFFBE8',
      'warning-2': '#FFF3C4',
      'warning-6': colors.warning,
      'orange-1': '#FFF2E8',
      'orange-2': '#FCDDCA',
      'orange-6': '#F27E57',
      ...colors,
    },
  },
})
