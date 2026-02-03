import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, spacing, typography } from '../constants/theme';

export type MoreStackParamList = {
  MoreList: undefined;
  Research: undefined;
  Resources: undefined;
  Events: undefined;
  Contact: undefined;
};

type Props = NativeStackScreenProps<MoreStackParamList, 'MoreList'>;

const ITEMS: { key: keyof Omit<MoreStackParamList, 'MoreList'>; title: string }[] = [
  { key: 'Research', title: 'Research, Innovation & Creativity' },
  { key: 'Resources', title: 'Resources' },
  { key: 'Events', title: 'Events Calendar' },
  { key: 'Contact', title: 'Contact Us' },
];

export default function MoreScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          Explore more FAS information: research, resources, events, and contact details.
        </Text>
      </View>
      {ITEMS.map(({ key, title }) => (
        <Pressable
          key={key}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => navigation.navigate(key)}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.chevron}>→</Text>
        </Pressable>
      ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: { opacity: 0.8 },
  cardTitle: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  chevron: {
    ...typography.body,
    color: colors.primary,
    marginLeft: spacing.sm,
  },
});
