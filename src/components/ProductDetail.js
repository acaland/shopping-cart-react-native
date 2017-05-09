import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

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
  },
  newPrice: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    height: 44,
    paddingLeft: 5
  }
});


class ProductDetail extends React.Component {
  state = { newPrice: this.props.price }
  render() {
    const { title, desc, price } = this.props;
    const { wrapper } = styles;
    return (
      <View style={wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.price}>{this.state.newPrice} Euro</Text>
          <TextInput
            style={styles.newPrice}
            placeholder="New Price"
            onChangeText={text => {
              this.setState({ newPrice: parseFloat(text) })
              this.props.onPriceUpdate(parseFloat(text));
            }}
          />
      </View>
    )
  }
};



export default ProductDetail;
