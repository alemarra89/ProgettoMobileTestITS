import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Flexbox from './src/pages/flexbox';
import Homepage from './src/pages/homepage';
import JsonPlaceholder, {Post} from './src/pages/jsonplaceholder';
import JsonPlaceholderDettaglio from './src/pages/jsonplaceholder/dettaglio';
import Lezione1007 from './src/pages/lezione1007.tsx';
import Prodotti, {Prodotto} from './src/pages/prodotti';
import DettaglioProdotto from './src/pages/prodotti/dettaglio';
import NuovoProdotto from './src/pages/prodotti/nuovo';

export type StackParams = {
  Homepage: undefined;
  Flexbox: undefined;
  Lezione1007: undefined;
  JsonPlaceholder: undefined;
  JsonPlaceholderDettaglio: {
    post: Post;
  };
  Prodotti: undefined;
  DettaglioProdotto: {
    prodotto: Prodotto;
  };
  NuovoProdotto: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<StackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Lezione1007" component={Lezione1007} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="JsonPlaceholder" component={JsonPlaceholder} />
        <Stack.Screen
          name="JsonPlaceholderDettaglio"
          component={JsonPlaceholderDettaglio}
        />
        <Stack.Screen name="Prodotti" component={Prodotti} />
        <Stack.Screen name="DettaglioProdotto" component={DettaglioProdotto} />
        <Stack.Screen name="NuovoProdotto" component={NuovoProdotto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
