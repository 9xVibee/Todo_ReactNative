import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const data = [
  {
    name: "iphone",
    id: 1,
  },
  {
    name: "iphone 2",
    id: 2,
  },
  {
    name: "iphone 3",
    id: 3,
  },
];

export default function App() {
  const [count, setCount] = useState(false);

  const handlePress = () => {
    setCount((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text>Demo js okay bro i understand! {count}</Text>
      <Button title="Click" onPress={handlePress} />

      <Modal visible={count} animationType="slide">
        <Text>This is inside the modal</Text>
        <Button title="Close" onPress={handlePress} />
      </Modal>

      {/* Flat list demo */}
      <FlatList
        style={{
          width: "100%",
          marginTop: 10,
        }}
        data={data}
        contentContainerStyle={{
          gap: 10,
        }}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const Item = ({ item }) => {
  return (
    <View
      style={{
        height: 300,
        width: "100%",
        backgroundColor: "red",
      }}
    >
      <Text>{item?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
