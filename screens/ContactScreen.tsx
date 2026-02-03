import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

const FAS_URL = 'https://www.aub.edu.lb/fas/pages/default.aspx';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          For questions about the Faculty of Arts and Sciences, try reaching out via the FAS website or social media first. The FAS website has full contact details for offices, departments, and centers.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>FAS website</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(FAS_URL)}
        >
          aub.edu.lb/fas
        </Text>
        <Text style={styles.cardBody}>
          Visit the FAS homepage for contact information, office hours, and links to departments and centers.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>AUB main</Text>
        <Text style={styles.cardBody}>
          American University of Beirut{'\n'}
          P.O. Box 11-0236{'\n'}
          Riad El-Solh / Beirut 1107 2020{'\n'}
          Lebanon
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Useful AUB links</Text>
        <Text style={styles.cardBody}>
          • Find People (directory){'\n'}
          • AUBSIS (student info){'\n'}
          • Webmail{'\n'}
          • Registrar{'\n'}
          • Libraries
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://www.aub.edu.lb')}
        >
          www.aub.edu.lb
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
  link: {
    ...typography.body,
    color: colors.accent,
    textDecorationLine: 'underline',
    marginBottom: spacing.sm,
  },
});
