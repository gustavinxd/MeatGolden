import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from '../../colors/index';
import Icon from '../../../assets/icon/icons';
import InputComponent from '../../components/Inputs/index';
import Divisor from '../../components/Divider/divisor'
import SubmitButton from "../../components/Buttons/SubmitButton";

const windowWidth = Dimensions.get('window').width; // Obtenha a largura da tela
const windowHeight = Dimensions.get('window').height; // Obtenha a altura da tela

export default function Precos({navigation}) {
  return (
    <View style={styles.view}>
      <ScrollView>
        <Text style = {styles.title}>Configurar Preços</Text>
        <Text  style = {styles.subtitle}>Altere para os valores corretos!</Text>
        <View style={styles.container}>
          <View style={styles.containerPrecos}>
            <View style={styles.iconRow}>
              <Icon name="ox" size={30} />
              <Text style = {{fontSize: 20}}>Bovina</Text>
            </View>
            <View style={styles.columnContainer}>
              <InputComponent />
            </View>
            <Divisor />
            <View style={styles.iconRow}>
              <Icon name="pig" size={30} />
              <Text>Suina</Text>
            </View>
            <View style={styles.columnContainer}>
              <InputComponent />
            </View>
            <Divisor />
            <View style={styles.iconRow}>
              <Icon name="chicken" size={30} />
              <Text>Frango</Text>
            </View>
            <View style={styles.columnContainer}>
              <InputComponent />
            </View>
          </View>
        </View>
        {/* <SubmitButton/> */}
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
    fontFamily: 'InriaSans_700Bold',

  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  title:{
    fontSize: 30,
    paddingTop: 15,
    paddingLeft: 15,
  },
  subtitle:{
    fontSize: 20,
    paddingLeft: 15,
  },
  subtitleBov:{
    fontSize: 23,
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
  iconRow: {
    flexDirection: 'row', // Organiza os itens na linha
    alignItems: 'center', // Alinha os itens ao centro ao longo do eixo transversal (vertical)
    marginBottom: 10,
  },
  columnContainer: {
    flexDirection: 'column', // Organiza os itens em coluna
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Alinha os itens à esquerda ao longo do eixo transversal (vertical)
  },

});

