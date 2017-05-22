import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import ShoppingListContainer from '../containers/ShoppingListContainer';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Shopping Card" style={{ top: 20 }}/>
        <ShoppingListContainer style={{ top: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
