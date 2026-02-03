import { StyleSheet, Text, View, ScrollView, Linking, Image } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const STATS = [
  { value: '2,225', label: 'Undergraduate students (2024)' },
  { value: '538', label: 'Graduate students (2024)' },
  { value: '24', label: 'PhD students (2024)' },
  { value: '33,000+', label: 'Alumni worldwide' },
];

const QUICK_LINKS = [
  { title: 'Undergraduate Degrees', path: 'Academics' },
  { title: 'Graduate Degrees', path: 'Academics' },
  { title: 'Doctoral Programs', path: 'Academics' },
  { title: 'Departments', path: 'Academics' },
  { title: 'Student Services', path: 'Student Life' },
  { title: 'Events', path: 'Events' },
];

export default function HomeScreen() {
  const fasUrl = 'https://www.aub.edu.lb/fas/pages/default.aspx';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Faculty of Arts and Sciences</Text>
        <Image source={require('../assets/fas-logo.png')} style={styles.logo} />
        <Text style={styles.heroSubtitle}>American University of Beirut</Text>
        <Text style={styles.tagline}>AUB's Oldest and Largest Faculty</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>At a glance</Text>
        <View style={styles.statsGrid}>
          {STATS.map(({ value, label }) => (
            <View key={label} style={styles.statCard}>
              <Text style={styles.statValue}>{value}</Text>
              <Text style={styles.statLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick links</Text>
        {QUICK_LINKS.map(({ title }) => (
          <View key={title} style={styles.linkRow}>
            <Text style={styles.linkText}>{title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAS website</Text>
        <Text
          style={styles.websiteLink}
          onPress={() => Linking.openURL(fasUrl)}
        >
          aub.edu.lb/fas
        </Text>
        <Text style={styles.caption}>
          Tap to open the full FAS website in your browser.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
  hero: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  heroTitle: {
    ...typography.title,
    color: '#FFF',
    marginBottom: spacing.xs,
  },
  heroSubtitle: {
    ...typography.subtitle,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: spacing.sm,
  },
  tagline: {
    ...typography.caption,
    color: 'rgba(255,255,255,0.85)',
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: spacing.sm,
    resizeMode: 'contain',
  },
  section: { marginBottom: spacing.lg },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  statLabel: {
    ...typography.small,
    color: colors.textSecondary,
  },
  linkRow: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  linkText: {
    ...typography.body,
    color: colors.text,
  },
  websiteLink: {
    ...typography.body,
    color: colors.accent,
    textDecorationLine: 'underline',
    marginBottom: spacing.xs,
  },
  caption: {
    ...typography.small,
    color: colors.textSecondary,
  },
});
