import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Total = ({ total, style }) => (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.text}>Total: {total}</Text>
    </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    //alignSelf: 'stretch',
    alignItems: 'center',
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '300'
  }
});

export default Total;
