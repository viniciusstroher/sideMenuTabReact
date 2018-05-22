import Drawer from 'react-native-drawer';
import React  from 'react';
import { Text, View,Button } from 'react-native';

export default class Menu extends React.Component {  
 
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {open: false,aberto:false};
  }

  openControlPanel = () => {
    this.setState({open: true,aberto:true});
  };
  
  componentDidUpdate(prevProps, prevState){
      console.log(prevProps,prevState);
  }
 
  render () {
    return (
      <Drawer
        ref="drawer"
        type="static"

        open={this.state.open}
        openDrawerOffset={100}
        tapToClose={true}
        onOpen={ () => {this.setState({open: true,aberto:true})} }
        onClose={ () => {this.setState({open: false,aberto:false})} }
        content={ this.state.aberto ? <View><Text>ae</Text></View> : null }
        negotiatePan={true}
        captureGestures={true}
        panOpenMask={0.5}
        side={'left'}
        >  
        <View>
          <Text>owwi</Text>
          <Button onPress={() => {this.openControlPanel()}} title="abre"/>
          <Button onPress={() => {this.props.navigation.navigate('Home')}} title="abre"/>
        </View>
      </Drawer>
    )
  } 
 
}