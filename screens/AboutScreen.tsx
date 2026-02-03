import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const SECTIONS = [
  {
    title: 'History and Mission',
    body: 'The Faculty of Arts and Sciences is AUB\'s oldest and largest faculty, offering programs across the humanities, natural sciences, and social sciences. FAS is committed to the American liberal arts model of education and to graduating students who think critically and act responsibly.',
  },
  {
    title: 'People',
    body: 'FAS is home to faculty, staff, and students from Lebanon and the region. Leadership, department chairs, and centers work together to support teaching, research, and student success.',
  },
  {
    title: 'Stories',
    body: 'Read about faculty research, student achievements, and how FAS contributes to AUB and the wider community.',
  },
  {
    title: 'Press',
    body: 'News and media coverage related to the Faculty of Arts and Sciences.',
  },
  {
    title: 'Historic Buildings',
    body: 'FAS is housed in some of AUB\'s most iconic buildings on the Beirut campus, reflecting the university\'s history and architectural heritage.',
  },
];

const FAS_ABOUT_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          The Faculty of Arts and Sciences (FAS) at the American University of Beirut is the university's oldest and largest faculty. FAS offers undergraduate, graduate, and doctoral programs across divisions, departments, and centers.
        </Text>
      </View>

      {SECTIONS.map(({ title, body }) => (
        <View key={title} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardBody}>{body}</Text>
        </View>
      ))}

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_ABOUT_URL)}
        >
          Learn more on the FAS website →
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
