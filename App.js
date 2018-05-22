import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import * as All from './Drawers';
import Menu from './Menu';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return [<Menu/>];
  }
}

export default Tab = TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
},{
  navigationOptions: {tabBarVisible:false}
});


// export default Menu; 
 // export default All.MyApp;

// export const Router = StackNavigator({
//     Inicio: {
//         screen: All.MyApp,
//     },
//     Card : {
//         screen: tab,
//     },
// }, {
//     headerMode: 'screen',
// });
