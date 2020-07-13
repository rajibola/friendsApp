import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  return (
    // <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    <SignUp />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
