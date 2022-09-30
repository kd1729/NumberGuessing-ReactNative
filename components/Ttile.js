import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ child }) {
  return <Text style={styles.title}>{child}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});