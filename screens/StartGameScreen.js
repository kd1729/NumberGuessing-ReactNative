import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton child="Reset" />
        <PrimaryButton child="Confirm" />
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#3b021f",
    borderRadius: 8,
  },
  numberInput: {
    height: 50,
    fontSize: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginTop: 8,
    marginBottom: 32,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
    buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    },
});
