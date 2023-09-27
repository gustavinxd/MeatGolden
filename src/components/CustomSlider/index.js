import { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../../colors';

export default function CustomSlider({ icon, sliderTitle, value, onValueChange, setValue }) {

  const [number, setNumber] = useState(`${value}`)

  useEffect(() =>{
    setNumber(`${value}`)
  },[value])
 
  return (
    <View style={styles.sliderContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View style={styles.iconSection}>{icon}</View>
        <Slider
          minimumValue={0}
          maximumValue={50}
          value={value}
          onValueChange={onValueChange}
          style={{ width: '75%' }}
          maximumTrackTintColor={colors.light}
          thumbTintColor={colors.light}
          minimumTrackTintColor={colors.light}
        />
        <TextInput
          value={number}
          onChangeText={(e) => {
            if (e === ''){
              setValue((prevState) => ({...prevState, homens: 0 }))
            } else{
              setValue((prevState) => ({...prevState, homens: parseInt(e, 10) }))
            }
            }
            
          }
          style={styles.inputSlider}
          keyboardType="numeric"
          maxLength={2}
          textAlign="center"
          inputMode="numeric"
          cursorColor={colors.yellow}
        />
      </View>
      <Text style={styles.sliderTitle}>{sliderTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 5
  },
  iconSection: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.light
  },
  sliderTitle: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 12,
    color: colors.light
  },
  inputSlider: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 16,
    color: colors.light,
    borderColor: colors.light,
    borderBottomWidth: 1
  }
});
