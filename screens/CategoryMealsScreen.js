import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
	const catId = props.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(c => c.id === catId);

	const navigateToMealDetail = () => {
		props.navigation.navigate("MealDetail");
	};

	return (
		<View style={styles.screen}>
			<Text>{selectedCategory.title}</Text>
			<Button title="Go to Details!" onPress={navigateToMealDetail} />
			<Button title="Go Back" onPress={() => props.navigation.pop()} />
		</View>
	);
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(c => c.id === catId);

	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor:
				Platform.OS === "android" ? selectedCategory.color : ""
		},
		headerTintColor:
			Platform.OS === "android" ? "white" : selectedCategory.color
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoryMealsScreen;
