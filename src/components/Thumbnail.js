import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Thumbnail = ({ url, style }) => (
  <Image
    source={{ uri: url }}
    resizeMode="contain"
    style={{ width: 100, marginLeft: 10, flex: 1 }}
  />
);

export default Thumbnail;
