import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen
	},
	CategoryMeal: {
		screen: CategoryMealsScreen
	},
	MealDetail: {
		screen: MealDetailScreen
	}
});

export default createAppContainer(MealsNavigator);
