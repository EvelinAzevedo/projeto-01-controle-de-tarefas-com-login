import React, { useState } from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return isLogged ? (
    <HomeScreen setIsLogged={setIsLogged} />
  ) : (
    <LoginScreen setIsLogged={setIsLogged} />
  );
}