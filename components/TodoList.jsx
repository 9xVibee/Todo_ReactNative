import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(["Abhay", "Prem"]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, text]);
  };

  const handleRemoveItem = (item) => {
    setTodos((prev) => prev.filter((pro) => pro != item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Todo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo..."
          style={styles.input}
          placeholderTextColor={"white"}
          onChangeText={setText}
        />
        <Button title="Add" style={styles.btn} onPress={handleAddTodo} />
      </View>
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo item={item} handleRemoveItem={handleRemoveItem} />
          )}
          style={{
            marginTop: 10,
          }}
        />
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    gap: 8,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    color: "white",
  },
});
