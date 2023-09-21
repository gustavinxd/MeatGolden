import { Text, View } from "react-native";
import CustomStackNavigator from '../../components/CustomHeader/index';

export default function Menu({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
    </View>
  );
}