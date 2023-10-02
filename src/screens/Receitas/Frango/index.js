import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image
  } from 'react-native';
  import CardComponent from '../../../components/Cards/Opções/index';
  
  export default function ReceitasFrango() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.top}>
                <Text style={styles.title}>Receitas</Text>
                <Image source = {require('../../../../assets/img/boi.png')} style={styles.boi}/>
            </View>
            
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
      paddingLeft: '5%',
    },
    subtitle: {
      color: 'white',
      fontSize: 65,
      paddingLeft: '5%',
      flexDirection: 'column',
      position: 'absolute'
    },
    top: {
      justifyContent: 'space-between',
      flex: 1,
      flexDirection: 'row',
      position: 'relative'
    },
    headertemporario:{
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 3,
    }
  });