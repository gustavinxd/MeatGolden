import { TouchableOpacity, Text, Image } from 'react-native';
import colors from '../../colors/index'

export default function CardHome({uri,title,onPress}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white', borderBottomWidth: 12, borderColor: colors.light, marginBottom: 50,}} onPress={onPress}>
            <Image source={{ uri }} style={{ width: '100%', height: 200, borderColor: colors.light, borderWidth: 5,  }} />
            <Text style = {{fontSize: 30, fontFamily: 'InriaSans_700Bold', textAlign: 'center', marginTop: 6,}}>{title}</Text>
        </TouchableOpacity>
    )
}