import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StackParams} from '../../../App';

type Props = NativeStackScreenProps<StackParams, 'Flexbox'>;

const Flexbox = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <View style={style.container}>
        <View style={[style.quadrato, style.quadratoRosso]} />
        <View style={[style.quadrato, style.quadratoVerde]} />
        <View style={[style.quadrato, style.quadratoBlu]} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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

export default Flexbox;
