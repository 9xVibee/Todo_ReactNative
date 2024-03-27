import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Todo = ({ item, handleRemoveItem }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          marginTop: 5,
        }}
      >
        {item}
      </Text>
      <Feather
        onPress={() => handleRemoveItem(item)}
        style={{
          marginTop: 2,
        }}
        color={"red"}
        size={24}
        name="trash"
      />
    </View>
  );
};

export default Todo;
