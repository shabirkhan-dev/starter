// Ambient types so uniwind's `className` is visible on React Native components
// across workspace boundaries. Add interfaces here as components need them.
/// <reference types="uniwind/types" />

import "react-native";
import "react-native-reanimated";

declare module "react-native" {
	interface ViewProps {
		className?: string;
	}
	interface TextProps {
		className?: string;
	}
	interface PressableProps {
		className?: string;
	}
}

declare module "react-native-reanimated" {
	interface AnimatedProps<P> {
		className?: string;
	}
}
