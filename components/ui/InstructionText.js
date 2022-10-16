import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({child, style}) {
    return (
    <Text style={[styles.instructionText, style]}>{child}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontFamily: 'open-sans',
        fontSize: 30,
      },
});