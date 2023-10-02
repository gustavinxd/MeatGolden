import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import CardComponent from '../../../components/Cards/Opções/index';
import CardHome from './../../../components/Cards/CadsHome/index';

export default function ReceitasHome({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Receitas</Text>

        <CardHome onPress={() => navigation.navigate('Bovina')} titulo='Bovina' link='aaaaaa' uri='aaaaa'/>
        <CardHome onPress={() => navigation.navigate('Frango')} titulo='Frango' link='aaaaaa' uri='aaaaa'/>
        <CardHome onPress={() => navigation.navigate('Suína')} titulo='Suína' link='aaaaaa' uri='aaaaa'/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  title: {
    color: 'white',
    fontSize: 40,
    paddingTop: '20%',
    paddingLeft: '5%',
    textDecorationLine: 'underline'
  }
});
