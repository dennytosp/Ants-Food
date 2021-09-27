import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Logo} from '../../../assets/svg';
import styles from './styles';
import {ButtonPrimary, FormAuth, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';

const Login = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeInput, setActiveInput] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

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
        <Text style={styles.txtHello}>Hello !</Text>
        <Text style={styles.txtWelcome}>WELCOME BACK</Text>
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={styles.wrapperCenter}>
        <FormAuth text="Email" inputFirst />
        <FormAuth text="Password" eye secureTextEntry />
        <Pressable style={styles.wrapperForgot}>
          <Texting
            text="Forgot Password"
            fonts={FONTS.semiBold}
            colors={COLORS.black}
            fontSize={18}
          />
        </Pressable>
        <ButtonPrimary
          textButton="SIGN IN"
          handleOnpressButton={() => navigation.navigate('Common')}
        />
        <View style={styles.wrapperFooter}>
          <Texting text="Do not have an account? " colors={'#808080'} />
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Texting text="SIGN UP" fonts={FONTS.bold} colors={COLORS.black} />
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

export default Login;
