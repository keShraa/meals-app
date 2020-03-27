import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
	const navigateToCategory = ({ item }) => {
		props.navigation.navigate("CategoryMeal", {
			categoryId: item.id
		});
	};

	const renderGridItem = itemData => {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => navigateToCategory(itemData)}
			/>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, index) => item.id} // not mandatory (id is now accepted as key)
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
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
