import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { List, Photo } from '../screens'

const Navigator = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: { title: 'List' }
    },
    Photo: {
      screen: Photo,
      navigationOptions: { title: 'Photo' }
    }
  },
  {
  initialRouteName: 'List',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#E1E1E1'
    },
    headerTintColor: '#34343C'
  }
})

export default createAppContainer(Navigator)