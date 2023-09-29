import { StyleSheet, View } from 'react-native';
import ProgressBar from '../ProgressBar/index';

export default function CustomStackNavigator() {
  return (
    <View style={styles.container}>
      <ProgressBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 5,
    borderWidth: 1
  }
});
