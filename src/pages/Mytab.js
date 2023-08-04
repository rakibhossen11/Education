import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './Home';
import Read from './Read';

const Tab = createBottomTabNavigator();

export class Mytab extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home'  component={Home} />
        <Tab.Screen name='Read' component={Read} />
      </Tab.Navigator>
    )
  }
}

export default Mytab;
