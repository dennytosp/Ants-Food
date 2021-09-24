import React from 'react';
import {common} from './../screens';
import CustomTabBar from './CustomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} screen />}>
      <Tab.Screen
        name="Home"
        component={common.Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Saved"
        component={common.Saved}
        options={{
          tabBarLabel: 'Saved',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={common.Notifications}
        options={{
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={common.Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
