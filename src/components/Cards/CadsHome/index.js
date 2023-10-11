import { TouchableOpacity, Text, Image } from 'react-native';
import colors from '../../../colors/index';

export default function CardHome({uri,title,onPress}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white', marginBottom: 40, paddingBottom: 15, borderRadius: 8}} onPress={onPress}>
            <Image source={{ uri }} style={{ width: '100%', height: 200, borderColor: colors.light, borderWidth: 5, borderRadius: 8 }} />
            <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 10, fontFamily: 'InriaSans_700Bold'}}>{title}</Text>
        </TouchableOpacity>
    )
}