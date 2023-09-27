import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';
import Checkbox from '../CheckOption';

export default function SelectOption({
  icon,
  selectTitle,
  colorSelection = 'red',
  children
}) {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <View
      style={[
        styles.selectContainer,
        colorSelection === 'light'
          ? { borderColor: colors.light }
          : { borderColor: colors.primary }
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
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

        <TouchableOpacity
          style={styles.openOptions}
          onPress={() => setOpenOptions(!openOptions)}
        >
          <MaterialIcons
            name={openOptions ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
            size={30}
            color={
              colorSelection === 'light'
                ? colors.light 
                : colors.primary
            }
          />
        </TouchableOpacity>
      </View>
      {openOptions && children}
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
