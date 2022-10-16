import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ child }) {
  return <Text style={styles.title}>{child}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
