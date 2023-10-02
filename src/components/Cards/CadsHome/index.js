import { TouchableOpacity, Text } from 'react-native';

export default function CardHome({uri,titulo,onPress,link}){

    return(
        <TouchableOpacity style={{width: '80%', backgroundColor: 'white'}} onPress={onPress}>
            <Text>{uri}</Text>
            <Text>{titulo}</Text>
        </TouchableOpacity>
    )
}