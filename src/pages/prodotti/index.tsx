import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {StackParams} from '../../../App';
import Card from '../../components/card';

export interface Prodotto {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

type Props = NativeStackScreenProps<StackParams, 'Prodotti'>;

function Prodotti(props: Props) {
  console.log(props);
  const [prodotti, setProdotti] = useState<Prodotto[]>([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3004/products').then(async result => {
      setProdotti(await result.json());
    });
  }, []);

  const renderItem = ({item}: {item: Prodotto}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('DettaglioProdotto', {
            prodotto: item,
          })
        }>
        <Card
          titolo={item.name}
          descrizione={item.description}
          immagine={item.photo}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList data={prodotti} renderItem={renderItem} />
    </View>
  );
}

export default Prodotti;
