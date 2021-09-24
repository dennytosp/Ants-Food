import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Logo} from '../../../assets/svg';
import styles from './styles';
import {ButtonPrimary, FormAuth, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';

const Register = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View style={{marginTop: top, ...styles.wrapperHeader}}>
        <View style={styles.lineHeader}></View>
        <Pressable style={styles.wrapperLogo}>
          <Logo />
        </Pressable>
        <View style={styles.lineHeader}></View>
      </View>
    );
  };

  const _renderTitle = () => {
    return (
      <View style={styles.wrapperTitle}>
        <Text style={styles.txtWelcome}>WELCOME</Text>
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <FormAuth text="Name" inputFirst />
        <FormAuth text="Email" />
        <FormAuth text="Password" eye secureTextEntry />
        <FormAuth text="Confirm Password" eye secureTextEntry checkEnd />
        <ButtonPrimary
          textButton="SIGN UP"
          handleOnpressButton={() => console.log('Sign Up')}
        />
        <View style={styles.wrapperFooter}>
          <Texting text="Already have account? " colors={'#808080'} />
          <Pressable onPress={() => navigation.goBack()}>
            <Texting text="SIGN IN" fonts={FONTS.bold} colors={COLORS.black} />
          </Pressable>
        </View>
      </View>
    );
  };

  const _renderFooter = () => {
    return <View style={styles.wrapperFooter}></View>;
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderTitle />
      <_renderCenter />
      <_renderFooter />
    </View>
  );
};

export default Register;
