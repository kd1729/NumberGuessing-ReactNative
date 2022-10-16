import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Ttile";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title child="Game Over" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}> {roundsNumber} </Text> rounds to
        get the number <Text style={styles.highlight}> {userNumber } </Text>
      </Text>
        <PrimaryButton child="Start a New Game" onPress={onStartNewGame}/>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
