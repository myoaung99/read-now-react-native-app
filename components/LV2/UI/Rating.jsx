import { View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const Rating = () => {
  return (
    <View className="flex flex-row items-center justify-center gap-x-1 mt-2 ">
      <Icon name="heart" type="ionicon" iconProps={{ size: 15 }} />
      <Text className="text-sm">4.5</Text>
    </View>
  );
};

export default Rating;
