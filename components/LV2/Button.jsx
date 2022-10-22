import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function Button(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          props.color,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 3,
    width: 100,
  },
  buttonInnerContainer: {
    elevation: 4,
    borderRadius: 3,
  },
  buttonText: {
    paddingVertical: 5,
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
