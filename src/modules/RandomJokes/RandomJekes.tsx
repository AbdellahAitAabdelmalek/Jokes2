import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
const baseUrl = 'https://api.jokes.one';

// Passing configuration object to axios

export const RandomJekes = () => {
  //   const joke = axios.get(`${baseUrl}/jod`);

  axios.get(`${baseUrl}/jod`).then(response => {
    console.log(response.data);
  });

  return <View></View>;
};
