import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ child, onPress, style1, style2 }) {
  return (
    <View style={[styles.buttonOuterContainer, style1]}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{child}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "50%",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 26,
    paddingHorizontal: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
