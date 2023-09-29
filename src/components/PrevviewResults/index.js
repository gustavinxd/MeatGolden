import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from "../../colors";

export default function PreviewResults({dia, data}){
    return(
        <View style={styles.container}>
            <Text style={styles.data}>06/08/2023</Text>
            <View style={styles.convidadosSection}>
                <MaterialCommunityIcons name='face-man-outline' size={18} color={colors.light}/>
                <Text style={styles.convidados}>1</Text>
                <MaterialCommunityIcons name='face-woman-outline' size={18} color={colors.light}/>
                <Text style={styles.convidados}>1</Text>
                <MaterialIcons name='child-care' size={18} color={colors.light}/>
                <Text style={styles.convidados }>1</Text>
                <MaterialIcons name='people-alt' size={18} color={colors.light}/>
                <Text style={styles.convidados }>1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        gap: 5,
        paddingHorizontal: 10
    },
    convidadosSection:{
        flexDirection: 'row',
        gap: 5
    },
    data:{
        fontFamily:'InriaSans_700Bold',
        fontSize: 18,
        alignItems: 'center',
        color: colors.light
    },
    convidados:{
        fontFamily:'InriaSans_400Regular',
        fontSize: 14,
        color: colors.light
    }
})