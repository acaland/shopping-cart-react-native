import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';


class QuantityManager extends Component {

  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  handleQuantityChange({ decrease }) {

    if (decrease && this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
      this.props.onQuantityChange(-this.props.basePrice);
    } else {
      this.setState({quantity: this.state.quantity + 1});
      this.props.onQuantityChange(this.props.basePrice);
    }

  }
  render() {
      return (
        <View style={styles.wrapper}>
          <Text>Quantity: {this.state.quantity}</Text>
          <View style={styles.buttons}>
            <Button title="+" onPress={this.handleQuantityChange} />
            <Button title="-" onPress={() => this.handleQuantityChange({decrease: true})} />
          </View>
          <Text>Subtotal: {this.state.quantity * this.props.basePrice}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    //borderWidth: 1,
    justifyContent: 'center'
  }
});


export default QuantityManager;
