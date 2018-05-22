import Drawer from 'react-native-drawer';
import React  from 'react';
import { Text, View,Button } from 'react-native';

export default class Menu extends React.Component {  
 
  constructor(props) {
    super(props);
    this.state = {open: false,aberto:false};
  }

  openControlPanel = () => {
    this.setState({open: true,aberto:true});
  };
  
  render () {
    return (
      <Drawer
        ref="drawer"
        type="static"

        open={this.state.open}
        openDrawerOffset={100}
        tapToClose={true}
        onClose={ () => {this.setState({open: false,aberto:false})} }
        content={ this.state.aberto ? <View><Text>ae</Text></View> : null }
        >
        <View>
          <Text>owwi</Text>
          <Button onPress={() => {this.openControlPanel()}} title="abre"/>
        </View>
      </Drawer>
    )
  }

}