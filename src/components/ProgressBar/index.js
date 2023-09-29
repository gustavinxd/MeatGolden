import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../../colors';
import { useProgressContext } from '../../contexts/progress';

export default function ProgressBar() {
  const { progress } = useProgressContext();

  return (
    <View style={styles.progressContainer}>
      <Progress.Bar
        progress={progress}
        width={null}
        height={10}
        color={colors.yellow}
        unfilledColor={colors.light}
        borderColor={colors.lightGrey}
        borderRadius={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent:'center',
  }
});
