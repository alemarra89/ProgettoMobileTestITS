import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackParams} from '../../../App';
import Card from '../../components/card';

type Props = NativeStackScreenProps<StackParams, 'DettaglioProdotto'>;

function DettaglioProdotto(props: Props) {
  console.log(props);

  return (
    <View>
      <Text>{JSON.stringify(props.route.params.prodotto)}</Text>
    </View>
  );
}

export default DettaglioProdotto;
