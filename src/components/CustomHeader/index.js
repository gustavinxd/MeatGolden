import { StyleSheet, View } from 'react-native';
import MenuButton from '../Buttons/MenuButton/index';
import BackButton from '../Buttons/BackButton/index';

export default function CustomHeader({navigation, route, children, removeBackButton}) {
  const BackButtonSet = removeBackButton ? 'flex-end' : 'space-between'
  return (
    <View style={styles.container}>
      <View style={[styles.containerButtons,{ justifyContent: BackButtonSet }]}>
        {removeBackButton ? null : <BackButton navigation={navigation} route={route}/>}
        <MenuButton navigation={navigation} route={route}/>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
