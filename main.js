import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './src/components/HomeScreen';
import createStore from './src/createStore';

const store = createStore();
console.log("creiamo lo store");
console.log(store.getState());

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header title="Shopping Card" style={{ top: 20 }}/>
//         { /* <Total /> */ }
//         <ShoppingList style={{ top: 20 }} />
//
//       </View>
//     );
//   }
// }

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)


Expo.registerRootComponent(App);
