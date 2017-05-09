import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import ShoppingList from './src/components/ShoppingList';


class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="Shopping Card" style={{ top: 20 }}/>

        <ShoppingList style={{ top: 20 }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});

Expo.registerRootComponent(App);
