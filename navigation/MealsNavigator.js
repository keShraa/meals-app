import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen.js";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: "Meal Categories"
			}
		},
		CategoryMeal: {
			screen: CategoryMealsScreen
		},
		MealDetail: {
			screen: MealDetailScreen
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === "android" ? Colors.primary : ""
			},
			headerTintColor:
				Platform.OS === "android" ? "white" : Colors.primary
		}
	}
);

export default createAppContainer(MealsNavigator);
