import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {PurchaseSuccess} from '../../../../../assets/svg';
import {ButtonPrimary, Texting} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';

const Purchase = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderCenter = () => {
    return (
      <View style={{marginTop: top + 80, ...styles.wrapperCenter}}>
        <Texting
          text="SUCCESS!"
          fontSize={36}
          fonts={FONTS.gelasioBold}
          colors={COLORS.black}
          marginBottom={30}
        />
        <Pressable style={styles.wrapperImageCenter}>
          <PurchaseSuccess />
        </Pressable>
        <Texting
          text={`Your order will be delivered soon. \nThank you for choosing our app!!`}
          fontSize={18}
          textAlign="center"
          marginHorizontal={36}
          fonts={FONTS.regular}
          marginBottom={45}
        />
      </View>
    );
  };

  const _renderEvent = () => {
    return (
      <View style={styles.wrapperEvent}>
        <ButtonPrimary
          textButton="TRACK YOUR ORDERS"
          marginBottom={25}
          handleOnpressButton={() => navigation.goBack()}
        />
        <Pressable
          style={styles.wrapperButton}
          onPress={() => navigation.navigate('Common')}>
          <Texting
            text="BACK TO HOME"
            fontSize={18}
            fonts={FONTS.semiBold}
            colors={COLORS.black}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderCenter />
      <_renderEvent />
    </View>
  );
};

export default Purchase;
