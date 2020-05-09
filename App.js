/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ColorButton from './src/component/color-button';

const App = () => {
  const [currentColor, setColor] = useState('white');
  const [undoColor, setUndoColor] = useState('white');
  const [redoColor, setRedoColor] = useState('white');
  const onPress = color => {
    setUndoColor(currentColor);
    setColor(color);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ColorButton color={'red'} onPress={onPress} />
        <ColorButton color={'green'} onPress={onPress} />
        <ColorButton color={'blue'} onPress={onPress} />
        <TouchableOpacity
          onPress={() => {
            setRedoColor(currentColor);
            setColor(undoColor);
          }}
          style={[styles.buttonColor, styles.buttonAction]}>
          <View>
            <Text>Undo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setColor(redoColor);
          }}
          style={[styles.buttonColor, styles.buttonAction]}>
          <View>
            <Text>Redo</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.displayView, {backgroundColor: currentColor}]} />
      <View style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  buttonColor: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonAction: {
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayView: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 120,
    width: 120,
  },
});

export default App;
