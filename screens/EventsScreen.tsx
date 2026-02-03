import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const FAS_EVENTS_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          FAS hosts lectures, workshops, conferences, and cultural events throughout the year. Events are organized by departments, centers, and student groups.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Events calendar</Text>
        <Text style={styles.cardBody}>
          For the full FAS events calendar, including dates, venues, and registration links, visit the FAS website. You can also submit events through the FAS events portal.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>All Events / Submit Event</Text>
        <Text style={styles.cardBody}>
          View all upcoming events or submit an event for the FAS calendar on the FAS website.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_EVENTS_URL)}
        >
          Open FAS Events on the website →
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
