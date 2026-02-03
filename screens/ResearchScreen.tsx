import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const AREAS = [
  {
    title: 'Research, Innovation and Creativity Hub (RICH)',
    description: 'RICH supports faculty and student research, innovation, and creative work across FAS.',
  },
  {
    title: 'Funding Opportunities',
    description: 'Internal and external grants, fellowships, and research funding for FAS faculty and students.',
  },
  {
    title: 'Labs',
    description: 'Research laboratories and facilities in the natural sciences and other disciplines.',
  },
  {
    title: 'Journals',
    description: 'Academic journals and publications associated with FAS departments and centers.',
  },
  {
    title: 'Museums + Galleries',
    description: 'FAS-affiliated museums and galleries that support teaching and public engagement.',
  },
  {
    title: 'Initiatives & Institutes',
    description: 'Special initiatives and institutes that advance research and collaboration within and beyond FAS.',
  },
];

const FAS_RESEARCH_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function ResearchScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          Research, innovation, and creativity are central to FAS. The faculty supports labs, centers, funding, and partnerships that advance knowledge across the humanities, social sciences, and natural sciences.
        </Text>
      </View>

      {AREAS.map(({ title, description }) => (
        <View key={title} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardBody}>{description}</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_RESEARCH_URL)}
        >
          More on research at FAS →
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
  intro: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  introText: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  cardBody: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  footer: { marginTop: spacing.md },
  link: {
    ...typography.body,
    color: colors.accent,
    textDecorationLine: 'underline',
  },
});
