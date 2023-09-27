import { Text, View, StyleSheet } from "react-native";
import CardComponent from '../../components/Cards/Opções/index';

export default function Receitas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'black',
    },
    title: {
      color: 'white',
      fontSize: 40,
      paddingTop: '20%',
    },
})
