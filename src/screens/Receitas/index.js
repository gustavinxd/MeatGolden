import { Text, View, StyleSheet } from "react-native";

export default function Receitas({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: 'black',
    },
    title: {
      color: 'white',
      fontSize: 40,
    },
})
