import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onPress={() => navigateToMealDetail(itemData.item.id)}
			/>
		);
	};
	const catId = props.navigation.getParam("categoryId");

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	const navigateToMealDetail = id => {
		props.navigation.navigate("MealDetail", { mealId: id });
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: "100%" }}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedCategory = CATEGORIES.find(c => c.id === catId);

	return {
		headerTitle: selectedCategory.title
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
