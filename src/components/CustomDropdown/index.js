import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import toggleAnimation from '../../animation';
import { useThemeContext } from '../../contexts/theme';

export default function CustomDropdown({
  icon,
  selectTitle,
  colorSelection = 'red',
  startOpen,
  children,
  haveIcon = true,
  topSection
}) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;

  const [openOptions, setOpenOptions] = useState(false);

  const animationController = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const config = {
      duration: 300,
      toValue: openOptions ? 0 : 1,
      useNativeDriver: true
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setOpenOptions(!openOptions);
  };

  const isOpen = openOptions && children;

  useEffect(() => {
    if (startOpen) {
      setOpenOptions(true);
    }
  }, []);

  return (
    // Container do dropdown
    <View
      style={[
        styles.selectContainer,
        colorSelection === 'light'
          ? { borderColor: colors.light }
          : { borderColor: themeColor }
      ]}
    >
      {/* Parte de cima do dropdown, onde pode receber um icone, label e action ou apenas outros componentes quando falso */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Section do icone */}
        {haveIcon === true ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {/* View onde possui borda adaptativa e que recebe o icone no meio */}
            <View
              style={[
                styles.iconSection,
                colorSelection === 'light'
                  ? { borderColor: colors.light }
                  : { borderColor: themeColor }
              ]}
            >
              {icon}
            </View>
            {/* Label do dropdown */}
            <Text
              style={[
                styles.optionTitle,
                colorSelection === 'light'
                  ? { color: colors.light }
                  : { color: themeColor }
              ]}
            >
              {selectTitle}
            </Text>
          </View>
        ) : (
          topSection
        )}

        {/* Action de abrir a dropdown e renderizar outros componentes caso seja true hasActions, se for falso, apenas renderizará children sem oculta-lo */}

        <TouchableOpacity
          style={styles.openOptions}
          onPress={() => toggleDropdown()}
        >
          <MaterialIcons
            name={openOptions ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
            size={30}
            color={colorSelection === 'light' ? colors.light : themeColor}
          />
        </TouchableOpacity>
      </View>
      {isOpen}
    </View>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    gap: 5,
    borderRadius: 8,
    borderWidth: 2,
    overflow: 'hidden'
  },
  iconSection: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 2
  },
  optionTitle: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 20
  },
  openOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  }
});
