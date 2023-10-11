import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CardHome from './../../../components/Cards/CadsHome/index';
import colors from '../../../colors/index';

export default function ReceitasHome({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Receitas</Text>
        <View style={styles.cardshome}>
          <CardHome
            onPress={() => navigation.navigate('Bovina')}
            title="Bovina"
            uri="https://www.infomoney.com.br/wp-content/uploads/2019/06/carne-devons.jpg?resize=800%2C515&quality=50&strip=all"
          />
          <CardHome
            onPress={() => navigation.navigate('Frango')}
            title="Frango"
            uri="https://www.canalrural.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=627&format=.jpg&quality=91&imagick=imagens-cdn.canalrural.com.br/wp-content/uploads/carne-de-frango-4.jpg"
          />
          <CardHome
            onPress={() => navigation.navigate('Suína')}
            title="Suína"
            uri="https://www.tribunapr.com.br/wp-content/uploads/sites/81/2022/02/16140732/Carne-Suina_baixa-970x550.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  titulo: {
    color: colors.light,
    fontSize: 50,
    paddingTop: '10%',
    textDecorationLine: 'underline',
    fontFamily: 'InriaSans_700Bold',
    textAlign: 'center'
  },
  cardshome: {
    paddingTop: 30,
    marginBottom: 100,
    alignItems: 'center'
  }
});
