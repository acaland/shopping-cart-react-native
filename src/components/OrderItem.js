import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Thumbnail from './Thumbnail';
import ProductDetail from './ProductDetail';
import QuantityManager from './QuantityManager';

class OrderItem extends Component {
  state = { newPrice: 25 }
  render() {
    return(
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => Linking.openURL("https://www.google.it")}
        activeOpacity={0.8}>
        <Thumbnail url="https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg"/>
        <ProductDetail
          title="Mastering React Native"
          desc="Libro di testo utilizzato per il corso di LAP 2 @ Unict"
          price={this.state.newPrice}
          onPriceUpdate={(newPrice) => this.setState({ newPrice: newPrice})}
        />
      <QuantityManager basePrice={this.state.newPrice} onQuantityChange={this.props.onQuantityChange}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    height: 200,
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default OrderItem;
