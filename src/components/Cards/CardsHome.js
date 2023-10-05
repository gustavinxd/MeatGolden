import { TouchableOpacity, Text, Image } from 'react-native';
import colors from '../../colors/index'

export default function CardHome({uri,title,onPress}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white', marginBottom: 50,}} onPress={onPress}>
            <Image source={{ uri }} style={{ width: '100%', height: 200, borderColor: colors.light, borderWidth: 8, borderBottomWidth: 15, }} />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}