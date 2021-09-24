import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Header} from '../../../components';
import { Search } from '../../../assets/svg';

const Notifications = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <Header title="NOTIFICATIONS" leftIcon={Search} handleOnpressLeft={() => navigation.goBack()} />
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
    </View>
  );
};

export default Notifications;
