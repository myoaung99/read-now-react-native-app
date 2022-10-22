import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
// import Button from "./Button";
import { Button } from "@rneui/base";

const ListBookItem = ({ bookData }) => {
  return (
    <View style={styles.listBooks}>
      <View style={styles.listBooks_imageContainer}>
        <Image
          style={styles.bookImg}
          source={{
            uri: bookData.imageUri,
          }}
        />
      </View>

      <View style={styles.bookInfo}>
        <View>
          <Text style={styles.bookTitle}>{bookData.title}</Text>
          <Text style={styles.bookDescription}>{bookData.shortDes}</Text>
        </View>

        <View style={styles.actionButton}>
          <Button
            onPress={() => {
              console.log("Read book: ", bookData.title);
            }}
            title="Read"
            color="#555555"
            buttonStyle={{ width: 90 }}
          />
        </View>
      </View>
    </View>
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
    paddingTop: 5,
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
  actionButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
