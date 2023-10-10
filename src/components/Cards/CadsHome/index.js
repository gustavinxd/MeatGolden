import { TouchableOpacity, Text, Image } from 'react-native';
import colors from '../../../colors/index';

export default function CardHome({uri,title,onPress}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white', marginBottom: 40, paddingBottom: 15,}} onPress={onPress}>
            <Image source={{ uri }} style={{ width: '100%', height: 200, borderColor: colors.light, borderWidth: 5 }} />
            <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 10, fontFamily: ''}}>{title}</Text>
        </TouchableOpacity>
    )
}