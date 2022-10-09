import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

interface Props {
  nome: string;
  callback: (str: string) => void;
  pulsanteDisabilitato?: boolean;
}

function Saluto({nome, callback, pulsanteDisabilitato}: Props) {
  const [visibility, setVisibility] = useState<boolean>(true);

  const mostraNascondiNome = () => {
    setVisibility(!visibility);
    callback('Il componente è ' + (!visibility ? 'visibile' : 'nascosto'));
  };

  return (
    <View>
      <Text>Ciao</Text>
      {visibility && <Text>{nome}</Text>}
      <Button
        title="Mostra Nascondi nome"
        onPress={mostraNascondiNome}
        disabled={pulsanteDisabilitato}
      />
    </View>
  );
}

export default Saluto;
