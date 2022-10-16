import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({child}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{child}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
