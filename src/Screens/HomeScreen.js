import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TaskItem from "./components/TaskItem";
import styles from "./components/Styles/styles";

export default function HomeScreen({ setIsLogged }) {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  function addTask() {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      description: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Minhas Tarefas</Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setIsLogged(false)}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Digite uma nova tarefa"
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={styles.counter}>
        Concluídas: {completedCount}
      </Text>

      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>
          Nenhuma tarefa cadastrada.
        </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          )}
        />
      )}
    </View>
  );
}