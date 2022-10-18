import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BooksScreen from "../../screens/BooksScreen";
import ExploreScreen from "../../screens/ExploreScreen";
import BookmarkScreen from "../../screens/BookmarkScreen";

const Tab = createBottomTabNavigator();

const MainScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreens;
