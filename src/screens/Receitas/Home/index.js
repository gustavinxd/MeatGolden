import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import CardComponent from '../../../components/Cards/Opcoes/index';

export default function Receitas() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Receitas</Text>
        <TouchableHighlight>
          <CardComponent />
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
  title: {
    color: 'white',
    fontSize: 40,
    paddingTop: '20%',
    paddingLeft: '5%',
    textDecorationLine: 'underline'
  }
});
