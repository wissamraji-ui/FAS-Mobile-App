/**
 * AUB FAS Mobile App – theme
 * Berytus Red (AUB brand) + neutrals for readability
 */
export const colors = {
  primary: '#8B1538',      // Berytus Red (AUB)
  primaryDark: '#6B0F2A',
  primaryLight: '#A81D4A',
  background: '#F8F6F4',
  surface: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#5C5C5C',
  border: '#E5E2DE',
  accent: '#2C5282',       // link blue
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const typography = {
  title: { fontSize: 24, fontWeight: '700' as const },
  subtitle: { fontSize: 18, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  caption: { fontSize: 14, fontWeight: '400' as const },
  small: { fontSize: 12, fontWeight: '400' as const },
} as const;
