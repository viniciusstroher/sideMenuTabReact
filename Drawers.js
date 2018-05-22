import React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';
import  * as All from 'react-navigation'; 

export class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

export class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
   
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

export const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const MyApp = All.createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
