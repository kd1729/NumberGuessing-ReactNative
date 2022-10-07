import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Ttile";
import Card from "../components/ui/Card";

function StartGameScreen({ onConfirmed }) {
  const [numberEntered, setNumberEntered] = useState("");

  function resetInputHandler() {
    setNumberEntered("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(numberEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirmed(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title child="Start a new game!" />
      <Card>
        <Text style={styles.instructionText}>Input a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={numberEntered}
          onChangeText={(text) => setNumberEntered(text)}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton child="Reset" onPress={resetInputHandler} />
          <PrimaryButton child="Confirm" onPress={confirmInputHandler} />
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 30,
  },
  numberInput: {
    height: 50,
    fontSize: 40,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
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
