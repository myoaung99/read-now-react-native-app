import { View, StyleSheet, Image, FlatList } from "react-native";
import React, {useState} from "react";
import ListBookItem from "../../LV2/ListBookItem";
import { booksData } from "../../LV1/dummy_data";
import { carouselData } from "../../LV1/dummy_data";
import CarouselCard from "./carousel";
import { Text, ButtonGroup } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import GridBookItem from "../../LV2/GridBookItem";


const AllBooks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
    const [columns, setColumns] = useState(2);

  return (
    <View style={styles.container}>
      <CarouselCard data={carouselData} />
      <Text h4 style={{textAlign: 'center'}}>Popular Books</Text>
      <ButtonGroup
          selectedButtonStyle={{backgroundColor: '#555555'}}
          buttons={[
              <Ionicons name="md-grid-sharp" size={12} color={selectedIndex === 0 ? 'white' : '#555555'} />,
              <FontAwesome5 name="list" size={12} color={selectedIndex === 1 ? 'white' : '#555555'} />
              ]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ width: 60, height: 30, alignSelf: 'flex-end', marginTop: 10, borderRadius: 5 }}
      />
      <View style={styles.flatList}>
          {selectedIndex === 1 ? <FlatList
              data={booksData}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <ListBookItem bookData={item}/>}
              showsVerticalScrollIndicator={false}
          /> : <FlatList
              data={booksData}
              keyExtractor={(item) => item.id}
              renderItem={({item})=> <GridBookItem bookData={item}/>}
              key={columns}
              numColumns={columns}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{justifyContent: 'space-around'}}
          />}


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
  },
});
