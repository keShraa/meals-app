import React, { useState } from "react";
import { useScreens } from "react-native-screens";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";

useScreens(); // using native optimized screen components (improve perf)

const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});
};

export default function App() {
	const [fontLoaded, setfontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setfontLoaded(true)}
			/>
		);
	}

	return <MealsNavigator />;
}
