import React from "react";
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from "react-native";

const CategoryGridTile = props => {
	let TouchableComponent = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
				<View
					style={{
						...styles.container,
						...{ backgroundColor: props.color }
					}}
				>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 10,
		height: 120
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.6,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
		padding: 10,
		justifyContent: "flex-end",
		alignItems: "flex-end"
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
		textAlign: "right",
		color: "white",
		textShadowColor: "rgba(0, 0, 0, 0.3)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 2
	}
});

export default CategoryGridTile;
