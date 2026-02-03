import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const RESOURCES = [
  {
    title: 'Onboarding',
    description: 'Information and resources for new faculty and staff joining FAS.',
  },
  {
    title: 'Mentoring',
    description: 'Mentoring programs and support for faculty and graduate students.',
  },
  {
    title: 'Guidelines + Forms',
    description: 'Official guidelines, policies, and forms used across FAS for academic and administrative procedures.',
  },
  {
    title: 'Jobs@FAS',
    description: 'Current job openings and positions within the Faculty of Arts and Sciences.',
  },
];

const FAS_RESOURCES_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function ResourcesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          FAS provides resources for faculty, staff, and students. Use this section to find onboarding, mentoring, guidelines, and job opportunities.
        </Text>
      </View>

      {RESOURCES.map(({ title, description }) => (
        <View key={title} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardBody}>{description}</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_RESOURCES_URL)}
        >
          Full resources on FAS website →
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
