import { Text, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from '../../colors/index';
import BoiIcon from '../../components/Icons/icons/boi';
import InputComponent from '../../components/Inputs/index';

export default function Precos({navigation}) {
  return (
    <View style={styles.view}>
      <Text style = {styles.title}>Configurar Preços</Text>
      <Text  style = {styles.subtitle}>Altere para os valores corretos!</Text>
      <View style = {styles.container}>
        <View style = {styles.containerPrecos}>
          <BoiIcon style={styles.boiIcon}/>
          <Text style={styles.subtitleBov}>Bovina</Text>
          <View style={styles.input}>
            <InputComponent/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrecos: {
    backgroundColor: colors.primary,
    width: '85%',
    height: 500,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 30,
    fontFamily: 'InriaSans_700Bold',
    paddingTop: 15,
    paddingLeft: 15,
  },
  subtitle:{
    fontSize: 20,
    fontFamily: 'InriaSans_700Bold',
    paddingLeft: 15,
  },
  subtitleBov:{
    fontSize: 23,
    fontFamily: 'InriaSans_700Bold',
    paddingLeft: 15,
    color: colors.light,
    padding: 13,
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.80,
      shadowRadius: 6.27,
  },
  input:{
    flexDirection: 'column',
  }
});