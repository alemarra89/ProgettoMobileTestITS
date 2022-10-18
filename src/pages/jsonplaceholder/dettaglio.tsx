import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackParams} from '../../../App';
import Card from '../../components/card';

export interface Commento {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type Props = NativeStackScreenProps<StackParams, 'JsonPlaceholderDettaglio'>;

function JsonPlaceholderDettaglio(props: Props) {
  console.log(props);
  const [commenti, setCommenti] = useState<Commento[]>([]);

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/posts/' +
        props.route.params.post.id +
        '/comments',
    ).then(async result => {
      setCommenti(await result.json());
    });
  }, [props.route.params.post.id]);

  const renderItem = ({item}: {item: Commento}) => {
    return (
      <View
        style={{margin: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        <Text style={{fontSize: 12}}>
          {item.name} ({item.email})
        </Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={commenti}
        renderItem={renderItem}
        ListHeaderComponent={
          <Card
            titolo={props.route.params.post.title}
            descrizione={props.route.params.post.body}
          />
        }
      />
    </View>
  );
}

export default JsonPlaceholderDettaglio;
