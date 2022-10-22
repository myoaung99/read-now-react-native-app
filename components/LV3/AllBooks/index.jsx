import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import ListBookItem from "../../LV2/ListBookItem";
import { booksData } from "../../LV1/dummy_data";
import { carouselData } from "../../LV1/dummy_data";
import CarouselCard from "./carousel";

const AllBooks = () => {
  return (
    <View style={styles.container}>
      <CarouselCard data={carouselData} />
      <View style={styles.flatList}>
        <FlatList
          data={booksData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListBookItem bookData={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AllBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  flatList: {
    flex: 1,
    marginTop: 20,
  },
});
