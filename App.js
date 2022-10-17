import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView } from "react-native";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsover, setGameIsover] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const[fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

    if(!fontsLoaded){
      return <AppLoading/>
    }
    

  function pickedNumberHandler(number) {
    setUserNumber(number);
    setGameIsover(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsover(true);
    setRoundsNumber(numberOfRounds);
  }

  function startNewGameHandler(){
    setRoundsNumber(0);
    setUserNumber(null);
    setGameIsover(false);
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootScreen}>

          { (gameIsover && userNumber) ? <GameOverScreen userNumber={userNumber} roundsNumber={roundsNumber} onStartNewGame={startNewGameHandler} />: 
          
          (userNumber ? (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ) : (
            <StartGameScreen onConfirmed={pickedNumberHandler} />
          ))}
          
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15,
  },
});
