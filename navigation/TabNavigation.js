import React from 'react';
import { View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Home from '../screens/Tabs/Home';
import Search from '../screens/Tabs/Search';
import Notifications from '../screens/Tabs/Notifications';
import Profile from '../screens/Tabs/Profile';
import MessageLink from '../components/MessageLink';

const stackFactory = (initialRoute, initialConfig) => {
  return createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...initialConfig }
    }
  });
};

export default createBottomTabNavigator({
  Home: stackFactory(Home, {
    title: 'Home',
    headerRight: <MessageLink />
  }),
  Search: stackFactory(Search, {
    title: 'Search'
  }),
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate('PhotoNavigation')
    }
  },
  Notifications: stackFactory(Notifications, {
    title: 'Notifications'
  }),
  Profile: stackFactory(Profile, {
    title: 'Profile'
  })
});
