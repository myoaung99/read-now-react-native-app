import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
// import Button from "./Button";

const ListBookItem = ({ bookData }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.listBooks, pressed && styles.pressed]}
    >
      <View style={styles.listBooks_imageContainer}>
        <Image
          style={styles.bookImg}
          source={{
            uri: bookData.imageUri,
          }}
        />
      </View>

      <View style={styles.bookInfo} className="space-y-1">
        <Text style={styles.bookTitle}>{bookData.title}</Text>
        <Text style={styles.bookDescription}>{bookData.shortDes}</Text>
        <View className="flex flex-row items-center gap-x-1 pt-1">
          <Icon name="heart" type="ionicon" iconProps={{ size: 15 }} />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ListBookItem;

const styles = StyleSheet.create({
  listBooks: {
    marginTop: 10,
    marginBottom: 5,
    height: 100,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
  },
  bookImg: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  listBooks_imageContainer: {
    height: "100%",
    width: 80,
  },
  bookInfo: {
    position: "relative",
    paddingTop: 7,
    paddingLeft: 10,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  bookDescription: {
    color: "gray",
    width: "80%",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.75,
  },
});
