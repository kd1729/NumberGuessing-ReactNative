import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Ttile";
import NumberContainer from "../components/game/NumberContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessItemLog from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  // console.log(min, max, exclude);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  // console.log(rndNum);
  // console.log();

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  // console.log(currentGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBound = 1;
    maxBound = 100;
  }, []);

  function nextGuessHandler(direction) {
    console.log(direction, currentGuess, userNumber);
    console.log();
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    let newRandomNumber = 0;
    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    newRandomNumber = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newRandomNumber);
    setRounds((currentRounds) => [newRandomNumber, ...currentRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title child="Opponent's Guess" />
      <NumberContainer child={currentGuess} />

      <Card>
        <InstructionText
          style={styles.InstructionText}
          child="Higher or Lower"
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style1={styles.plusminus}
            child={<Ionicons name="md-add" size={24} color="white" />}
            onPress={nextGuessHandler.bind(this, "higher")}
          />
          <PrimaryButton
            style1={styles.plusminus}
            child={<Ionicons name="md-remove" size={24} color="white" />}
            onPress={nextGuessHandler.bind(this, "lower")}
          />
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList 
          data={rounds}
          keyExtractor={(item) => item.toString()}
          renderItem={(itemData) =>  <GuessItemLog guess={itemData.item} roundNo={rounds.length - itemData.index} />}
        />
      </View>
      
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  InstructionText: {
    marginBottom: 12,
  },
  plusminus: {
    width: 130,
    marginHorizontal: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});
