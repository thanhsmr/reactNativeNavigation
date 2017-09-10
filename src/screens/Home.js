import React, {Component} from 'react';

import {
  View, Text, TouchableOpacity
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
        <Text style={{backgroundColor:'red'}}>Home ablkjslkjfljalkjsljsl fjlfk</Text>
        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('detailScreen',
            {
              param1:'param1FromHome'
            })
          }}
        >
          <Text style={{fontSize:20, padding:10}}>Go to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
