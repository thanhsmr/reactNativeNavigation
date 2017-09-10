import React from 'react';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Home from './screens/Home';
import User from './screens/User.js';
import Detail from './screens/Detail.js';
import Menu from './screens/Menu.js';

export const HomeStack = StackNavigator({
  homeScreen: {
    screen: Home
  },

  detailScreen: {
    screen: Detail,
    navigationOptions: {
      title:'Detail'
    }
  }


})

export const UserStack = StackNavigator({
  userScreen: {
    screen: User,
    navigationOptions: {
      title:'User'
    }
  }
})

export const Tabbar = TabNavigator({
  Home:{
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel:'Home'
    }
  },
  User:{
    screen: UserStack,
    navigationOptions: {
      tabBarLabel:'User'
    }
  }
},
{
  tabBarPosition:'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: '#dddddd'
    },
    activeTintColor: 'red',
    inactiveTintColor: 'blue'
  }
}
)
