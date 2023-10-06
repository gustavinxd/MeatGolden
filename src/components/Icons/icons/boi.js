import {View, Image, StyleSheet} from 'react-native';
import colors from '../../../colors/index'

export default function  BoiIcon (){
    return(
        <View style={styles.boi}>
            <Image source={require('../../../../assets/img/boiIcon.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    boi:{
        backgroundColor: colors.light,
        width: 55,
        height: '12%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 30,
        height: 30,
    }
})