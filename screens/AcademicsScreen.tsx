import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const ACADEMICS = [
  {
    title: 'Divisions',
    description: 'FAS is organized into divisions that group related departments and programs.',
  },
  {
    title: 'Departments',
    description: 'Departments offer majors, minors, and courses in specific disciplines.',
  },
  {
    title: 'Programs',
    description: 'Undergraduate and graduate degree programs, diplomas, and specializations.',
  },
  {
    title: 'Centers',
    description: 'Research and academic centers that support teaching and scholarship across FAS.',
  },
];

const DEGREE_TYPES = [
  'Undergraduate Degrees',
  'Graduate Degrees',
  'Doctoral Programs',
  'Diplomas',
  'Online Programs',
];

const FAS_ACADEMICS_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function AcademicsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Academic structure</Text>
        {ACADEMICS.map(({ title, description }) => (
          <View key={title} style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Programs at a glance</Text>
        {DEGREE_TYPES.map((name) => (
          <View key={name} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Curriculum</Text>
        <Text style={styles.body}>
          FAS follows AUB's curriculum framework, including general education requirements and major-specific courses. For detailed requirements and course listings, visit the FAS website or the Office of the Registrar.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_ACADEMICS_URL)}
        >
          Full academics info on FAS website →
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
  section: { marginBottom: spacing.lg },
  sectionTitle: {
    ...typography.subtitle,
    color: colors.primary,
    marginBottom: spacing.sm,
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
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardBody: {
    ...typography.caption,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  bullet: { color: colors.primary, marginRight: spacing.sm, fontSize: 16 },
  listText: { ...typography.body, color: colors.text, flex: 1 },
  body: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  footer: { marginTop: spacing.sm },
  link: {
    ...typography.body,
    color: colors.accent,
    textDecorationLine: 'underline',
  },
});
