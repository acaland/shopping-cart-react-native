import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderItem from './OrderItem';
import Total from './Total';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal(amount) {
    this.setState({ total: this.state.total + amount})
  }
  renderOrders() {
    return this.props.items.map((orderInfo,i) => <OrderItem key={i} onQuantityChange={this.updateTotal}/>)
  }
  render() {
      return (
        <View style={{ flex: 1 }}>
          <Total style={{ top: 20 }} amount={this.state.total} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.wrapper, this.props.style]}>
              {this.props.items.map((orderInfo,i) => (
                <OrderItem key={i} onQuantityChange={this.updateTotal}/>)
                )}

            { /*<OrderItem onQuantityChange={this.updateTotal}/>
            <OrderItem onQuantityChange={this.updateTotal}/>
            <OrderItem onQuantityChange={this.updateTotal}/> */ }
          </ScrollView>
        </View>
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

ShoppingList.defaultProps = { items:
   [ { title: 'Masterining React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
     { title: 'Getting Started With React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' },
     { title: 'Masterining React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
     { title: 'Getting Started With React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' },
     { title: 'Masterining React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
     { title: 'Getting Started With React Native',
       thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
       description: 'One of the book used during the LAP2 course for learning React Native development',
       price: 30.4,
       url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' } ] };

export default ShoppingList;
