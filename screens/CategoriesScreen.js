import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Platform
} from "react-native";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = props => {
	const navigateToCategory = ({ item }) => {
		props.navigation.navigate("CategoryMeal", {
			categoryId: item.id,
			color: item.color,
			title: item.title
		});
	};

	const renderGridItem = itemData => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() => navigateToCategory(itemData)}
				itemData={itemData}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
	headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 120
	}
});

export default CategoriesScreen;
