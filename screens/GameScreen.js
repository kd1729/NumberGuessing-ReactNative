import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Ttile";
import NumberContainer from "../components/game/NumberContainer";
import {useState} from 'react';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(currentGuess);

  <Text>Opponent's Guess</Text>

  return (
    <View style={styles.screen}>
      <Title child="Opponent's Guess" />
      <NumberContainer child={currentGuess} />

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
