import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width - 32;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    overflow: "hidden",
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH / 2.5,
    resizeMode: "cover",
  },
});

export default CarouselItem;
