import { View } from 'react-native';
import colors from '../../colors';

export default function Separator() {
  return <View style={{ height: 2, backgroundColor: colors.primary, marginTop: 10, width: '95%', alignSelf: 'center' }} />;
}
