---
name: expo-mobile
description: Best practices for Expo Router mobile apps in this monorepo starter.
version: 1.0.0
license: MIT
---

# Expo Mobile Skill (Starter)

Use this when working on `apps/mobile`.

## Baseline

- Expo + Expo Router + TypeScript + NativeWind.
- Keep route files under `apps/mobile/src/app/`.
- Keep reusable logic in `apps/mobile/src/`.
- Keep UI primitives in `apps/mobile/src/components/ui/`.
- Keep app minimal; avoid heavy UI frameworks by default.

## Commands

- Dev: `bun --cwd apps/mobile run dev`
- Typecheck: `bun --cwd apps/mobile run typecheck`
- Lint: `bun --cwd apps/mobile run lint`
- Test: `bun --cwd apps/mobile run test`
- EAS dev build Android: `bun --cwd apps/mobile run build:dev:android`
- EAS dev build iOS: `bun --cwd apps/mobile run build:dev:ios`

## Routing

- File-based routes live in `src/app/`.
- Root layout in `src/app/_layout.tsx`.
- Home route in `src/app/index.tsx`.

## EAS Development Builds

- Use `expo-dev-client`.
- Configure via `apps/mobile/eas.json`.
- Standard flow:
  1. `eas login`
  2. `eas build:configure`
  3. Run development build command for platform.

## Testing

- Use Vitest for pure logic in `src/lib/**`.
- Keep route/component tests minimal unless needed.

## Styling and safe area

- Use NativeWind classes (`className`) for styling.
- Keep global Tailwind directives in `apps/mobile/global.css`.
- Use `react-native-safe-area-context` (`SafeAreaProvider` + `SafeAreaView`).
- Do not use deprecated `react-native` `SafeAreaView`.

## Expo UI

- Prefer `@expo/ui` components where practical for native UI behavior.
- Current starter uses `@expo/ui/datetimepicker`.

## References

- https://docs.expo.dev/develop/development-builds/create-a-build
- https://docs.expo.dev/router/introduction
- https://docs.expo.dev/skills
