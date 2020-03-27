import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from "react-native";

import Colors from "../constants/Colors";

const MealItem = props => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onPress}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.imageBg}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetails }}>
						<Text style={styles.textDetails}>
							{props.duration} min
						</Text>
						<Text style={styles.textDetails}>
							{props.complexity.toUpperCase()}
						</Text>
						<Text style={styles.textDetails}>
							{props.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: Colors.accent,
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 10
	},
	imageBg: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end"
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0, 0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		color: "white",
		textAlign: "center"
	},
	mealRow: {
		flexDirection: "row"
	},
	mealHeader: {
		height: "85%"
	},
	mealDetails: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%"
	},
	textDetails: {
		color: "white"
	}
});

export default MealItem;
