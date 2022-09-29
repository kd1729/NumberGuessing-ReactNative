import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(number) {
    setUserNumber(number);
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
     { userNumber ? <GameScreen userNumber={userNumber}/> : <StartGameScreen onConfirmed={pickedNumberHandler} /> }
      </ImageBackground>
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15
  }
});
