import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ child }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        styles={(pressed) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#643233" }}
      >
        <Text style={styles.buttonText}>{child}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#640233",
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: 150,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
