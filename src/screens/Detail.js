import React, {Component} from 'react';

import {
  View, Text, TouchableOpacity
} from 'react-native';

export default class Detail extends Component {

  // static navigationOptions = {
  //   title:'Detail'
  // }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> Detail </Text>
        <TouchableOpacity
          onPress = {()=>{this.props.navigation.goBack()}}
        >
          <Text>
            Go Back
          </Text>
        </TouchableOpacity>

        <Text>
          {this.props.navigation.state.params.param1}
        </Text>
      </View>
    );
  }
}
