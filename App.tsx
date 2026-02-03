import type { ComponentType } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from './constants/theme';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AcademicsScreen from './screens/AcademicsScreen';
import StudentLifeScreen from './screens/StudentLifeScreen';
import MoreScreen, { type MoreStackParamList } from './screens/MoreScreen';
import ResearchScreen from './screens/ResearchScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import EventsScreen from './screens/EventsScreen';
import ContactScreen from './screens/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator<MoreStackParamList>();

const headerOptions = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: '#FFF',
  headerTitleStyle: { fontWeight: '600', fontSize: 18 },
};

function wrapStack(Component: ComponentType<any>, title: string) {
  return function StackWrapper() {
    return (
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Screen" component={Component} options={{ title }} />
      </Stack.Navigator>
    );
  };
}

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'FAS at AUB' }}
      />
    </Stack.Navigator>
  );
}

function MoreStackScreen() {
  return (
    <MoreStack.Navigator screenOptions={headerOptions}>
      <MoreStack.Screen
        name="MoreList"
        component={MoreScreen}
        options={{ title: 'More' }}
      />
      <MoreStack.Screen
        name="Research"
        component={ResearchScreen}
        options={{ title: 'Research' }}
      />
      <MoreStack.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{ title: 'Resources' }}
      />
      <MoreStack.Screen
        name="Events"
        component={EventsScreen}
        options={{ title: 'Events' }}
      />
      <MoreStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Contact' }}
      />
    </MoreStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '500' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="About"
        component={wrapStack(AboutScreen, 'About FAS')}
        options={{ tabBarLabel: 'About' }}
      />
      <Tab.Screen
        name="Academics"
        component={wrapStack(AcademicsScreen, 'Academics')}
        options={{ tabBarLabel: 'Academics' }}
      />
      <Tab.Screen
        name="StudentLife"
        component={wrapStack(StudentLifeScreen, 'Student Life')}
        options={{ tabBarLabel: 'Student Life' }}
      />
      <Tab.Screen
        name="More"
        component={MoreStackScreen}
        options={{ tabBarLabel: 'More' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
