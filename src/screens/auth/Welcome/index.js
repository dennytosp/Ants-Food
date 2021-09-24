import React from 'react';
import {Pressable, View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {photos} from '../../../assets';

const Welcome = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderBackground = () => {
    return (
      <View style={styles.wrapperBackground}>
        <ImageBackground source={photos.welcome} style={styles.imgBackground} />
      </View>
    );
  };

  const _renderCenter = () => {
    return (
      <View style={{marginTop: top + 200, ...styles.wrapperCenter}}>
        <Text style={styles.title01}>MAKE YOUR</Text>
        <Text style={styles.title02}>HOME BEAUTIFUL</Text>
        <Text style={styles.subTitle}>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </Text>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={styles.wrapperButton}>
          <Text style={styles.txtStarted}>Get Started</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderBackground />
      <_renderCenter />
      <_renderFooter />
    </View>
  );
};

export default Welcome;
