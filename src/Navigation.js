/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from './modules/Home';
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home',
  },
  Plus: {
    lib: AntDesign,
    name: 'plus',
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        // tabBarBackground: '#131418',
        tabBarStyle: { backgroundColor: '#000', borderTopColor: '#000' },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'home',
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Home}
        options={{
          title: 'plus',
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
