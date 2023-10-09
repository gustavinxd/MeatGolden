import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import CardComponent from '../../../components/Cards/Opcoes/index';

export default function Bovina({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={styles.top}>
              <View style={styles.containerTitle}>
                  <Text style={styles.title}>Receitas</Text>
                  <Text style={[styles.title, { fontSize: 55, }]}>Bovina</Text>
              </View>

              <Image source = {require('../../../../assets/img/boi.png')} style={styles.boi}/>
          </View>
          <TouchableHighlight>
              <CardComponent selectedConst={receitasBovina} />
          </TouchableHighlight>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  containerTitle:{
      flexDirection: 'column',
      marginTop: 15,
      paddingLeft: 20,
  },
  title:{
      color: 'white',
      fontSize: 30,
      fontFamily: 'InriaSans_700Bold',
  },
  subtitle: {
      color: 'white',
      fontFamily: 'InriaSans_700Bold',

  },
  top: {
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'row',
  },
});