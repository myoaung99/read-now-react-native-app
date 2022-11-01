import { View, Text, Image } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import Rating from "../components/LV2/UI/Rating";
import BookDetail from "../components/LV3/BookDetail";

const BookDetailScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => {
        return <Text>arrow here</Text>;
      },
      title: "Book Detail",
      headerRight: () => {
        return <Text>bookmark here</Text>;
      },
    });
  }, []);

  return <BookDetail />;
};

export default BookDetailScreen;
