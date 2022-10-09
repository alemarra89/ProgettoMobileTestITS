import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import style from './style';

interface Props extends TextInputProps {}

function Input({placeholder, value, onChangeText}: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style.input}
    />
  );
}

export default Input;
