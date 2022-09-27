import { View, Text } from "react-native";

function PrimaryButton({ child }) {
  return (
    <View>
      <Text>{child}</Text>
    </View>
  );
}

export default PrimaryButton;
