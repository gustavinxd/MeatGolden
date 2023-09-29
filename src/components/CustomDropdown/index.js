import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';

export default function CustomDropdown({
  icon,
  selectTitle,
  colorSelection = 'red',
  hasAction,
  children,
  haveIcon = true,
  topSection
}) {
  const [openOptions, setOpenOptions] = useState(false);

  const haveActions = openOptions && children;

  return (
    // Container do dropdown
    <View
      style={[
        styles.selectContainer,
        colorSelection === 'light'
          ? { borderColor: colors.light }
          : { borderColor: colors.primary }
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
                  : { borderColor: colors.primary }
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
                  : { color: colors.primary }
              ]}
            >
              {selectTitle}
            </Text>
          </View>
        ) : (
          topSection
        )}

        {/* Action de abrir a dropdown e renderizar outros componentes caso seja true hasActions, se for falso, apenas renderizará children sem oculta-lo */}
        {hasAction && (
          <TouchableOpacity
            style={styles.openOptions}
            onPress={() => setOpenOptions(!openOptions)}
          >
            <MaterialIcons
              name={openOptions ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
              size={30}
              color={colorSelection === 'light' ? colors.light : colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
      {hasAction ? haveActions : children}
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
    borderWidth: 2
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
