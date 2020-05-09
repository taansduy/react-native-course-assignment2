import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
const ColorButton = ({color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(color);
      }}
      style={[styles.buttonColor, {backgroundColor: color}]}>
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonColor: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default ColorButton;
