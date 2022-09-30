import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Ttile";

function GameScreen({ userNumber }) {
  return (
    <View style={styles.screen}>
      <Title child="Game Screen" />

      <View>
        <Text> Higher or Lower ? </Text>
      </View>

      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
