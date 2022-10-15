import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({child}) {
    return (
    <Text style={styles.instructionText}>{child}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 30,
      },
});