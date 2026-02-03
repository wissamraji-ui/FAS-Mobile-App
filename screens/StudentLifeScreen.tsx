import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const ITEMS = [
  {
    title: 'Student Services Office',
    description: 'The FAS Student Services Office supports students with academic advising, registration, petitions, and general inquiries. Reach out for help with degree requirements, course selection, and university procedures.',
  },
  {
    title: 'Calls + Deadlines',
    description: 'Stay updated on important dates: registration periods, add/drop deadlines, withdrawal deadlines, exam schedules, and application deadlines for grants, research, and study abroad.',
  },
];

const AUB_STUDENT_AFFAIRS = 'https://www.aub.edu.lb/osa/Pages/default.aspx';

export default function StudentLifeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          Student life in FAS is supported by dedicated offices and resources. Use this section to find services and key dates.
        </Text>
      </View>

      {ITEMS.map(({ title, description }) => (
        <View key={title} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardBody}>{description}</Text>
        </View>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Useful links</Text>
        <Text style={styles.body}>
          For housing, clubs, wellness, career services, and other student life topics, visit the Office of Student Affairs (OSA) and the AUB portal (AUBSIS).
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(AUB_STUDENT_AFFAIRS)}
        >
          Office of Student Affairs →
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
  section: { marginTop: spacing.md },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  body: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  link: {
    ...typography.body,
    color: colors.accent,
    textDecorationLine: 'underline',
  },
});
