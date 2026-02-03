# FAS at AUB – Mobile App

A mobile app for the **Faculty of Arts and Sciences (FAS)** at the **American University of Beirut (AUB)**. It provides quick access to FAS information: about the faculty, academics, student life, research, resources, events, and contact details.

Information is based on the [FAS website](https://www.aub.edu.lb/fas/pages/default.aspx).

## Features

- **Home** – Overview, key stats (undergraduate/graduate/PhD students, alumni), and quick links
- **About** – History and mission, people, stories, press, historic buildings
- **Academics** – Divisions, departments, programs, centers, curriculum
- **Student Life** – Student Services Office, calls and deadlines, useful links
- **More** – Research (RICH, funding, labs, journals, museums), Resources (onboarding, mentoring, guidelines, Jobs@FAS), Events, Contact

Design uses AUB’s **Berytus Red** (#8B1538) for headers and accents.

## Tech Stack

- [Expo](https://expo.dev/) (React Native)
- TypeScript
- [React Navigation](https://reactnavigation.org/) (bottom tabs + native stack)

## Prerequisites

- Node.js 18+
- npm or yarn
- [Expo Go](https://expo.dev/go) on your phone (for testing on device)

## Setup and Run

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm start
   ```

3. **Run on device or simulator**

   - **iOS simulator:** press `i` in the terminal or run `npm run ios`
   - **Android emulator:** press `a` in the terminal or run `npm run android`
   - **Physical device:** scan the QR code with Expo Go (Android) or the Camera app (iOS)

## Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm start`    | Start Expo dev server      |
| `npm run ios`  | Run on iOS simulator       |
| `npm run android` | Run on Android emulator |
| `npm run web`  | Run in the browser         |

## Project Structure

```
├── App.tsx              # Root app with navigation
├── constants/
│   └── theme.ts         # Colors (AUB Berytus Red), spacing, typography
├── screens/
│   ├── HomeScreen.tsx
│   ├── AboutScreen.tsx
│   ├── AcademicsScreen.tsx
│   ├── StudentLifeScreen.tsx
│   ├── MoreScreen.tsx    # List for Research, Resources, Events, Contact
│   ├── ResearchScreen.tsx
│   ├── ResourcesScreen.tsx
│   ├── EventsScreen.tsx
│   └── ContactScreen.tsx
├── assets/              # Icons, splash
└── app.json             # Expo config
```

## Links

- [FAS at AUB](https://www.aub.edu.lb/fas/pages/default.aspx)
- [AUB](https://www.aub.edu.lb)
