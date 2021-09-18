import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return <View></View>;
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
    </View>
  );
};

export default Home;
