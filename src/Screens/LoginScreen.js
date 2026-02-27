import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./components/Styles/styles";

export default function LoginScreen({ setIsLogged }) {
  const usuarioFixo = "admin";
  const senhaFixa = "1234";

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (usuario === usuarioFixo && senha === senhaFixa) {
      setIsLogged(true);
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos.");
    }
  }

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Sistema de Controle de Tarefas</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}