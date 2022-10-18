import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {StackParams} from '../../../App';
import Card from '../../components/card';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = NativeStackScreenProps<StackParams, 'JsonPlaceholder'>;

function JsonPlaceholder(props: Props) {
  console.log(props);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(async result => {
      setPosts(await result.json());
    });
  }, []);

  const renderItem = ({item}: {item: Post}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('JsonPlaceholderDettaglio', {
            post: item,
          })
        }>
        <Card titolo={item.title} descrizione={item.body} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList data={posts} renderItem={renderItem} />
    </View>
  );
}

export default JsonPlaceholder;
