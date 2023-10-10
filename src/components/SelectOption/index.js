import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import colors from '../../colors';

export default function SelectOption({
  icon,
  selectTitle,
  colorSelection = 'red'
}) {
  const [selected, setSelected] = useState(false);

  const isSelectedRed = {
    container: selected
      ? { borderColor: colors.light, backgroundColor: colors.primary }
      : { borderColor: colors.primary, backgroundColor: colors.light },
    text: selected ? { color: colors.light } : { color: colors.primary },
    colorIcon: selected ? colors.light : colors.primary
  };

  const isSelectedLight = {
    container: selected
      ? { borderColor: colors.primary, backgroundColor: colors.light }
      : { borderColor: colors.light, backgroundColor: colors.primary },
    text: selected ? { color: colors.primary } : { color: colors.light },
    colorIcon: selected ? colors.primary : colors.light
  };

  return (
    <TouchableOpacity
      style={[
        styles.selectContainer,
        colorSelection === 'light'
          ? isSelectedRed.container
          : isSelectedLight.container
      ]}
      onPress={() => setSelected((prevState) => !prevState)}
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
                ? isSelectedRed.container
                : isSelectedLight.container
            ]}
          >
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={
                colorSelection === 'light'
                  ? isSelectedRed.colorIcon
                  : isSelectedLight.colorIcon
              }
            />
          </View>
          <Text
            style={[
              styles.optionTitle,
              colorSelection === 'light'
                ? isSelectedRed.text
                : isSelectedLight.text
            ]}
          >
            {selectTitle}
          </Text>
        </View>
        <View style={styles.check}>
            {selected && <FontAwesome5 name='check' size={20} color={colorSelection === 'light' ? colors.light : colors.primary}/>}
        </View>
      </View>
    </TouchableOpacity>
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
  check: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  }
});
