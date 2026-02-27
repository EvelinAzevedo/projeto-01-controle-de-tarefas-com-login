import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/styles";

export default function TaskItem({ task, removeTask, toggleTask }) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => toggleTask(task.id)}
      >
        <Text
          style={{
            textDecorationLine: task.completed
              ? "line-through"
              : "none",
          }}
        >
          {task.description}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeTask(task.id)}>
        <Text style={{ color: "red" }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}