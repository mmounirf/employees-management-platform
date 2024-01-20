import type { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core'

type ExtendedCustomColors = 'primary' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

export const londonTradeTheme: MantineThemeOverride = {
  primaryColor: 'primary',
  primaryShade: 5,
  // Generted via https://omatsuri.app/color-shades-generator
  colors: {
    primary: [
      '#D7E1FF',
      '#3C6DFF',
      '#0032FF',
      '#1837AA',
      '#24336C',
      '#0C1A52',
      '#000A41',
      '#000231',
      '#000220',
      '#000115',
    ],
    secondary: [
      '#FF919F',
      '#FF586F',
      '#FF2643',
      '#FF102E',
      '#ED1F36',
      '#FF0001',
      '#FF0000',
      '#E40000',
      '#C90000',
      '#B10000',
    ],
  },
}
