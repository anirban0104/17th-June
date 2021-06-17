import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Abc extends Component{
  displayALarm=()=>{
alert("Download will begin in a few seconds")

  }
render(){
  return(
    <Button 
    color={this.props.color} 
    title="Click Me"
    onPress={this.displayALarm}
     />
  )
}

}

export default class App extends Component {
  
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Abc color={"green"}> </Abc>
        <Text>My First React Component</Text>
      </View>
    );

  }

  
}
