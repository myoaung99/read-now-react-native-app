import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BooksScreen from "../../screens/BooksScreen";
import ExploreScreen from "../../screens/ExploreScreen";
import BookmarkScreen from "../../screens/BookmarkScreen";
import BookDetailScreen from "../../screens/BookDetailScreen";

const Tab = createBottomTabNavigator();

const MainScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      >
        <Tab.Screen name="Books" component={BookDetailScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreens;
