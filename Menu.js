import Drawer from 'react-native-drawer';
import React  from 'react';
import { Text, View,Button } from 'react-native';

export default class Menu extends React.Component {  
 
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  openControlPanel = () => {
    this.setState({open: true});
  };
  
  render () {
    return (
      <Drawer
        ref="drawer"
        type="static"

        open={this.state.open}
        openDrawerOffset={100}
        tapToClose={true}

        content={<View><Text>ae</Text></View>}
        >
        <View>
          <Text>owwi</Text>
          <Button onPress={() => {this.openControlPanel()}} title="abre"/>
        </View>
      </Drawer>
    )
  }

}