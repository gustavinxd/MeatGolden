import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../../colors';

export default function ProgressBar() {
  return (
    <View style={styles.progressContainer}>
      <Progress.Bar progress={0.25} width={null} height={10} color={colors.yellow} unfilledColor={colors.light} borderColor={colors.lightGrey} borderRadius={8}/>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    marginVertical: 25
  }
});
