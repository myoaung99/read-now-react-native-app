import { View, Text, Image } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import Rating from "../../LV2/UI/Rating";
import { Button, Icon } from "@rneui/themed";

const BookDetail = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/564x/73/66/0c/73660c3ede94f2abb1dc56c42c5172cc.jpg",
          }}
        />
      </View>
      <Text>Book Title</Text>
      <Rating />
      <View className="flex flex-row justify-between w-full">
        <Text>OverView</Text>
        <Text>Review</Text>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae
          dolore consectetur pariatur soluta, officiis nulla? Laudantium, quam
          eveniet ducimus odio neque eligendi tempora cum. Aliquam aut incidunt
          cupiditate excepturi!
        </Text>
      </View>
      <View className="w-full flex flex-row items-center  ">
        <View className="w-[15%]">
          <Icon name="heart" type="ionicon" iconProps={{ size: 30 }} />
        </View>
        <View className="flex-1">
          <Button title="Solid Button" buttonStyle={{ width: "100%" }} />
        </View>
      </View>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  imageContainer: {
    width: 150,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
