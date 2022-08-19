import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Joke} from './types/joke';

const baseUrl = 'https://api.jokes.one';

export const RandomJokes = () => {
  const [joke, setJoke] = useState<Joke[] | undefined>();

  const getJoke = async () => {
    const response = await axios.get(`${baseUrl}/jod`);
    console.log('response.data :: ', response.data);
    setJoke(response.data.contents.jokes);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <View>
      <Text>{joke?.[0].joke.text}</Text>
    </View>
  );
};
