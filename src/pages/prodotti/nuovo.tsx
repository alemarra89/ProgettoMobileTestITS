import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, View} from 'react-native';
import {StackParams} from '../../../App';
import Input from '../../components/input/input';

type Props = NativeStackScreenProps<StackParams, 'NuovoProdotto'>;

function NuovoProdotto(props: Props) {
  console.log(props);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const aggiungi = () => {
    fetch('http://10.0.2.2:3004/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        photo,
        price: Number(price),
      }),
    });
  };

  return (
    <View>
      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input
        placeholder="Descrizione"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="URL base64 foto"
        value={photo}
        onChangeText={setPhoto}
      />
      <Input placeholder="Prezzo" value={price} onChangeText={setPrice} />
      <Button onPress={aggiungi} title="Aggiungi" />
    </View>
  );
}

export default NuovoProdotto;
