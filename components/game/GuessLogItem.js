import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessItemLog({ guess, roundNo }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNo}</Text>
      <Text style={styles.itemText}>Opponent'S Guess: {guess}</Text>
    </View>
  );
}

export default GuessItemLog;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
  itemText: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
