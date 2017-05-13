import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import Thumbnail from './Thumbnail';
import ProductDetail from './ProductDetail';
import QuantityManager from './QuantityManager';

class OrderItem extends Component {
  state = { newPrice: this.props.productDetail.price }

  updatePrice = newPrice =>
    this.setState({ newPrice })

  render() {
    //console.log("mi stanno passando, forse, il dettaglio prodotto:");
    //console.log(this.props.productDetail);
    const { productDetail } = this.props;
    return(
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.8}
        onPress={() => Linking.openURL(productDetail.url)}
      >
        <Thumbnail url={productDetail.thumbnailUrl}/>
        <ProductDetail
          title={productDetail.title}
          desc={productDetail.description}
          onPriceChange={this.updatePrice}
          price={productDetail.price}
        />
      <QuantityManager
        onQuantityChange={this.props.onQuantityChange}
        basePrice={this.state.newPrice}/>
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
