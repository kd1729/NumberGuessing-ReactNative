import { Text, StyleSheet } from "react-native";

function Title({ child }) {
  return <Text style={styles.title}>{child}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
