import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    flex: 2
  },
  title: {
    fontSize: 16,
    fontWeight: '400'
  },
  desc: {
    fontSize: 12
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  }
});


const ProductDetail = ({ title, desc, price }) => {
  const { wrapper } = styles;

  return (
    <View style={wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.price}>{price} Euro</Text>
    </View>
  )
};



export default ProductDetail;
