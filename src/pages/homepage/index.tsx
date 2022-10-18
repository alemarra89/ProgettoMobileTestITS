import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, View} from 'react-native';
import {StackParams} from '../../../App';

type Props = NativeStackScreenProps<StackParams, 'Homepage'>;

function Homepage(props: Props) {
  const goToLezione = () => {
    props.navigation.navigate('Lezione1007');
  };
  const goToFlexbox = () => {
    props.navigation.navigate('Flexbox');
  };
  const goToJsonPlaceholder = () => {
    props.navigation.navigate('JsonPlaceholder');
  };
  const goToProdotti = () => {
    props.navigation.navigate('Prodotti');
  };
  const goToNuovoProdotto = () => {
    props.navigation.navigate('NuovoProdotto');
  };

  return (
    <View>
      <Button title="Lezione del 07/10" onPress={goToLezione} />
      <Button title="Flexbox" onPress={goToFlexbox} />
      <Button title="JsonPlaceholder" onPress={goToJsonPlaceholder} />
      <Button title="Prodotti" onPress={goToProdotti} />
      <Button title="Nuovo prodotto" onPress={goToNuovoProdotto} />
    </View>
  );
}

export default Homepage;
