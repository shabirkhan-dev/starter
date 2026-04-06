# Starter Mobile (Expo Router + NativeWind)

Minimal Expo + Expo Router + NativeWind starter for React Native.

## Commands

From repo root:

- `bun --cwd apps/mobile run dev` - start Expo dev server
- `bun --cwd apps/mobile run android` - run on Android
- `bun --cwd apps/mobile run ios` - run on iOS
- `bun --cwd apps/mobile run web` - run web preview
- `bun --cwd apps/mobile run build:dev:android` - create Android development build on EAS
- `bun --cwd apps/mobile run build:dev:ios` - create iOS development build on EAS
- `bun --cwd apps/mobile run lint` - Biome lint
- `bun --cwd apps/mobile run typecheck` - TypeScript check
- `bun --cwd apps/mobile run test` - Vitest unit tests

## Structure

- `src/app/` - Expo Router file-based routes
- `src/components/` - reusable components
- `src/components/ui/` - UI primitives
- `src/lib/` - app-local pure utilities

## Styling

- NativeWind is configured via:
  - `tailwind.config.js`
  - `global.css`
  - `metro.config.js`
  - `babel.config.js`

## Safe Area

- Uses `react-native-safe-area-context` (`SafeAreaProvider` + `SafeAreaView`) instead of deprecated `react-native` `SafeAreaView`.

## Expo UI

- Uses `@expo/ui/datetimepicker` in `src/components/ui/DateField.tsx`.

## Development build (EAS)

1. Install EAS CLI: `npm i -g eas-cli`
2. Login: `eas login`
3. Configure project (first time): `eas build:configure`
4. Build:
   - Android: `bun run build:dev:android`
   - iOS: `bun run build:dev:ios`
