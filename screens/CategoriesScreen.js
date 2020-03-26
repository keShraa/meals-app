import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = props => {
	const navigateToCategory = () => {
		props.navigation.navigate("CategoryMeal");
	};

	return (
		<View style={styles.screen}>
			<Text>The Categories Screen!</Text>
			<Button title="Go to Meals!" onPress={() => navigateToCategory()} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoriesScreen;
