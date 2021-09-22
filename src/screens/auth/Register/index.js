import React, {useState} from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Register = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return <View style={styles.wrapperHeader}></View>;
  };

  const _renderCenter = () => {
    return <View style={styles.wrapperCenter}></View>;
  };

  const _renderFooter = () => {
    return <View style={styles.wrapperFooter}></View>;
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderCenter />
      <_renderFooter />
    </View>
  );
};

export default Register;
