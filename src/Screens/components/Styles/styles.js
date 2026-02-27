import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#e8f0fe",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1a73e8",
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a73e8",
  },
  input: {
    borderWidth: 1,
    borderColor: "#90caf9",
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
  },
  primaryButton: {
    backgroundColor: "#1a73e8",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: "#5f6368",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskItem: {
    backgroundColor: "#e8f0fe",
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    marginVertical: 8,
    fontWeight: "bold",
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },
});

module.exports = styles