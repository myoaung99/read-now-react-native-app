import { Icon } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GridBookItem = ({ bookData }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: bookData.imageUri }} />
      <View className="w-full h-10 absolute bottom-0 bg-slate-200 rounded-tl-lg rounded-tr-lg">
        <View className="flex flex-row items-center justify-center gap-x-1 mt-2 ">
          <Icon name="heart" type="ionicon" iconProps={{ size: 15 }} />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default GridBookItem;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 200,
    marginBottom: 10,
    backgroundColor: "black",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    margin: 8,
    borderRadius: 10,
    position: "relative",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
