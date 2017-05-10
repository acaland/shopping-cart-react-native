import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ListView } from 'react-native';
import OrderItem from './OrderItem';
import Total from './Total';

class ShoppingList extends Component {

  state = { items: [] }

  componentWillMount() {
    fetch('https://www.dmi.unict.it/~calanducci/LAP2/data.json')
      .then(response => response.json())
      .then(responseData => this.setState({ dataSource: this.ds.cloneWithRows(responseData.items) }))
      .catch(error => alert("qualcosa di bruttissimo è successo :("))
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.title !== r2.title
    });
    this.state = {
      total: 0,
      dataSource: this.ds.cloneWithRows(this.props.items)
    }
  }



  updateTotal(amount) {
    this.setState({total: this.state.total + amount })
  }

  renderOrderItems() {
    return this.props.items.map((currentItem, i) =>
      <OrderItem key={i} onQuantityChange={this.updateTotal.bind(this)} />);
  }

  renderRow(rowData) {
    return <OrderItem productDetail={rowData} onQuantityChange={this.updateTotal.bind(this)} />;
  }

  render() {
      return (
        <View style={[styles.wrapper, this.props.style]}>
          <Total total={this.state.total}/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            />

          {/*<ScrollView
            showsVerticalScrollIndicator={false} >
            {this.renderOrderItems()}
          </ScrollView> */}
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

ShoppingList.defaultProps = {
  "items":[{"title":"Masterining React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9"},{"title":"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"},{"title":"Masterining React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9"},{"title":"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"},{"title":"Masterining React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9"},{"title":"Getting Started With React Native","thumbnailUrl":"https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg","description":"One of the book used during the LAP2 course for learning React Native development","price":30.4,"url":"https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE"}]
}



export default ShoppingList;
