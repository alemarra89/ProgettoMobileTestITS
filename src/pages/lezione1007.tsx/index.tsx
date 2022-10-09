import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import H1 from '../../components/h1/h1';
import H2 from '../../components/h1/h2';
import H3 from '../../components/h1/h3';
import Input from '../../components/input/input';
import Saluto from '../../components/saluto';

const Lezione1007 = () => {
  // const [visibility, setVisibility] = useState<boolean>(true);

  // const mostraNascondiNome = () => {
  //   setVisibility(!visibility);
  // };

  const callbackDalComponente = (str: string) => {
    console.log(str);
  };

  const onChangeText = (testo: string) => {
    console.log('testo digitato: ' + testo);
    setValue(testo);
  };

  const [value, setValue] = useState<string>('');

  return (
    <SafeAreaView>
      <ScrollView>
        <H1 />
        <H2 />
        <H3 />
        <Input
          placeholder="Testo placeholder"
          value={value}
          onChangeText={onChangeText}
        />

        <Text>Il testo digitato è: {value}</Text>
        {/* <Input value={value} onChangeText={onChangeText} />
        <Input value={value} onChangeText={onChangeText} /> */}
        {/* keyboardType={'numeric'}
          keyboardType={'phone-pad'} */}

        <Image
          source={{
            width: 200,
            height: 180,
            uri: 'http://www.sistemaitspuglia.it/wp-content/uploads/2019/03/apulia_logo_png-1.png',
          }}
        />
        <Saluto nome="Davide Botrugno" callback={callbackDalComponente} />
        {/* <Saluto nome="Alessandro Fiore" />
      <Saluto nome="Daniele Carratta" pulsanteDisabilitato /> */}
        {/* <View>
        <Text>Ciao</Text>
        {visibility && <Text>Davide Botrugno</Text>}
        <Button title="Mostra Nascondi nome" onPress={mostraNascondiNome} />
      </View> */}

        <Button title="Pulsante brutto" />

        <TouchableOpacity>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: '#F23456',
              borderRadius: 10,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Pulsante bello</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lezione1007;
