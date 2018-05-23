import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import * as All from './Drawers';
import Menu from './Menu';


class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (<Menu navigation={navigation}/>);
  }
} 

export default Tab = TabNavigator({
  Settings: { screen: SettingsScreen },
  Home:     { screen: HomeScreen },
},{
  navigationOptions: {tabBarVisible:false,swipeEnabled:false}
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
