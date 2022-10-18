import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreens from "./components/Navigator/MainScreens";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreens />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
