import { View } from 'react-native';
import colors from '../../colors';

export default function Separator({ color = 'red' }) {
  const choiceColor = color === 'light' ? colors.light : colors.primary
  return (
    <View
      style={{
        height: 2,
        backgroundColor: choiceColor,
        marginTop: 10,
        width: '95%',
        alignSelf: 'center'
      }}
    />
  );
}
