import React from 'react';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={[style.quadrato, style.quadratoRosso]} />
      <View style={[style.quadrato, style.quadratoVerde]} />
      <View style={[style.quadrato, style.quadratoBlu]} />
    </View>
  );
};

const style = StyleSheet.create({
  quadrato: {
    width: 120,
    height: 120,
  },
  quadratoRosso: {
    backgroundColor: 'red',
  },
  quadratoVerde: {
    backgroundColor: 'green',
  },
  quadratoBlu: {
    backgroundColor: 'blue',
  },
});

export default App;
