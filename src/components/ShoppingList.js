import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderItem from './OrderItem';

class ShoppingList extends Component {
  render() {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.wrapper, this.props.style]}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'gainsboro',
    flex: 1,
    //borderWidth: 1
  }
});


export default ShoppingList;
