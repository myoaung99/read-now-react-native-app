import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const GridBookItem = ({bookData})=>{
    return <View style={styles.container}>
        <View>
            <Image style={styles.image} source={{uri: bookData.imageUri}}/>
        </View>

    </View>;
}

export default GridBookItem;

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 200,
        marginBottom: 10,
        backgroundColor: 'black',
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
        margin: 8,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    }
});