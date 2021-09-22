import React, {useState} from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {FONTS, COLORS} from '../../../constants/theme';

const Welcome = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Text style={{fontFamily: FONTS.regular, textAlign: 'justify', color: COLORS.black}}>
          Minimal Stand is made of by natural wood. The design that is very
          simple and minimal. This is truly one of the best furnitures in any
          family for now. With 3 different colors, you can easily select the
          best match for your home.
        </Text>
      </View>
    );
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

export default Welcome;
