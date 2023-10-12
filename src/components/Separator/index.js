import { View } from 'react-native';
import colors from '../../colors';
import { useThemeContext } from '../../contexts/theme';

export default function Separator({ color = 'red' }) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;

  const choiceColor = color === 'light' ? colors.light : themeColor
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
