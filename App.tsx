import { StyleSheet } from "react-native";
import StackNavigation from "./navigation/StackNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StackNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cf1b1bff",
    justifyContent: "center",
  },
});
