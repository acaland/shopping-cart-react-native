import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    //borderWidth: 1,
    flex: 2,
    marginHorizontal: 15,
    justifyContent: 'center'
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
  },
  newPrice: {
    height: 44,
    borderWidth: 1,
    paddingHorizontal: 10

  }
});


class ProductDetail extends React.Component {
  state = { newPrice: 25 }

  // handleUpdatePrice = text => {
  //   this.setState({ newPrice: text });
  //   this.props.onPriceChange(parseFloat(text));
  // }

  handleUpdatePrice(text) {
    this.setState({ newPrice: text });
    this.props.onPriceChange(parseFloat(text));
  }

  render() {
    const { wrapper } = styles;
    const { title, desc, price } = this.props;



    return (
      <View style={wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.price}>{this.state.newPrice} Euro</Text>
          <TextInput
            style={styles.newPrice}
            placeholder="new price"
            keyboardType="decimal-pad"
            onChangeText={this.handleUpdatePrice.bind(this)}
          />
      </View>
    )
  }
};



export default ProductDetail;
