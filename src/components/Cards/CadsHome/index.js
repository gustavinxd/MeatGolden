import { TouchableOpacity, Text, Image } from 'react-native';

export default function CardHome({uri,title,onPress}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white', marginBottom: 50,}} onPress={onPress}>
            <Image source={{ uri }} style={{ width: '100%', height: 200 }} />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}