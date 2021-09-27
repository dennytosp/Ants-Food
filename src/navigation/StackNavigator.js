import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common, authen, inside} from './../screens';
import {StatusBar} from 'react-native';

import {StackStep} from './';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  let routeName;

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem('Onboardingfirst').then(value => {
            if (value == null) {
              AsyncStorage.setItem('Onboardingfirst', 'true');
              setIsFirstLaunch(true);
            } else {
              setIsFirstLaunch(false);
            }
          });
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };

    runAsync();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboard';
  } else {
    routeName = 'Welcome';
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen name="Onboard" component={authen.Onboard} />
          <Stack.Screen name="Welcome" component={authen.Welcome} />
          <Stack.Screen name="Register" component={authen.Register} />
          <Stack.Screen name="Login" component={authen.Login} />

          <Stack.Screen name="Common" component={StackStep.TabNavigation} />
          <Stack.Screen name="Home" component={common.Home} />
          <Stack.Screen name="Saved" component={common.Saved} />
          <Stack.Screen name="Notifications" component={common.Notifications} />
          <Stack.Screen name="Profile" component={common.Profile} />

          <Stack.Screen name="Details" component={inside.Details} />
          <Stack.Screen name="Cart" component={inside.Cart} />
          <Stack.Screen name="Checkout" component={inside.Checkout} />
          <Stack.Screen name="Purchase" component={inside.Purchase} />
          <Stack.Screen name="Rating" component={inside.Rating} />

          <Stack.Screen name="MyOrders" component={inside.MyOrders} />
          <Stack.Screen
            name="ShippingAddress"
            component={inside.ShippingAddress}
          />
          <Stack.Screen name="PaymentMethod" component={inside.PaymentMethod} />
          <Stack.Screen name="MyReviews" component={inside.MyReviews} />
          <Stack.Screen name="Settings" component={inside.Settings} />

          <Stack.Screen
            name="AddShippingAddress"
            component={inside.AddShippingAddress}
          />
          <Stack.Screen
            name="AddPaymentMethod"
            component={inside.AddPaymentMethod}
          />
        </>
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
