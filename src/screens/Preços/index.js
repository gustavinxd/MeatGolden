import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from '../../colors/index';
import Icon from '../../../assets/icon/icons';
import InputComponent from '../../components/Inputs/index';
import Divisor from '../../components/Divider/divisor'

const windowWidth = Dimensions.get('window').width; // Obtenha a largura da tela
const windowHeight = Dimensions.get('window').height; // Obtenha a altura da tela

export default function Precos({navigation}) {
  return (
    <View style={styles.view}>
      <ScrollView>
        <Text style = {styles.title}>Configurar Preços</Text>
        <Text  style = {styles.subtitle}>Altere para os valores corretos!</Text>
        <View style = {styles.container}>
          <View style = {styles.containerPrecos}>
            <Icon name="ox" size={30} />
          <View style={{flexDirection: 'column',}}>
            <InputComponent/>
          </View>
          <Divisor />
            <Icon name="pig" size={30} />
          <View style={{flexDirection: 'column',}}>
            <InputComponent/>
          </View>
          <Divisor />
            <Icon name="chicken" size={30} />
          <View style={{flexDirection: 'column',}}>
            <InputComponent/>
          </View>
          </View>
      </View>

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrecos: {
    backgroundColor: colors.primary,
    width: windowWidth/1.2,
    height: windowHeight/1.2,
    borderRadius: 10,
    padding: 20,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
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
  },

});