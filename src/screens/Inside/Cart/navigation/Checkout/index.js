import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {DeliveryDHL, MasterCard} from '../../../../../assets/svg';
import {
  ButtonPrimary,
  Editing,
  Header,
  Texting,
} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';

const Checkout = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <Header title="CHECK-OUT" handleOnpressLeft={() => navigation.goBack()} />
    );
  };

  const _renderShippingAddress = () => {
    return (
      <View style={styles.wrapperShipping}>
        <Editing title="Shipping Address" />
        <View style={styles.wrapperCard}>
          <Texting
            text="Bruno Fernandes"
            fontSize={18}
            marginTop={15}
            marginHorizontal={20}
            fonts={FONTS.bold}
            colors={COLORS.black}
          />
          <View style={styles.lineShipping}></View>
          <Texting
            text="25 rue Robert Latouche, Nice, 06200, Côte D’azur, France"
            marginHorizontal={20}
            lineHeight={25}
            marginBottom={15}
            colors={COLORS.light02}
          />
        </View>
      </View>
    );
  };

  const _renderPayment = () => {
    return (
      <View style={styles.wrapperPayment}>
        <Editing title="Payment" />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            ...styles.wrapperCard,
          }}>
          <Pressable style={styles.wrapperMasterCard}>
            <MasterCard />
          </Pressable>
          <Texting
            text="**** **** **** 3947"
            colors="#222222"
            fonts={FONTS.semiBold}
          />
        </View>
      </View>
    );
  };

  const _renderDelivery = () => {
    return (
      <View style={styles.wrapperDelivery}>
        <Editing title="Delivery method" size />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            ...styles.wrapperCard,
          }}>
          <Pressable style={{marginVertical: 20, marginHorizontal: 20}}>
            <DeliveryDHL />
          </Pressable>
          <Texting
            text="Fast (2-3days)"
            colors={COLORS.black}
            fonts={FONTS.bold}
          />
        </View>
      </View>
    );
  };

  const _renderFee = () => {
    return (
      <View style={styles.wrapperCard}>
        <Pressable style={{paddingTop: 20, ...styles.wrapperFee}}>
          <Texting text="Order: " colors={COLORS.light01} fontSize={18} />
          <Texting
            text="$ 95.00"
            colors={COLORS.black}
            fontSize={18}
            fonts={FONTS.bold}
          />
        </Pressable>

        <Pressable style={{paddingVertical: 20, ...styles.wrapperFee}}>
          <Texting text="Delivery:: " colors={COLORS.light01} fontSize={18} />
          <Texting
            text="$ 5.00"
            colors={COLORS.black}
            fontSize={18}
            fonts={FONTS.bold}
          />
        </Pressable>

        <Pressable style={{paddingBottom: 20, ...styles.wrapperFee}}>
          <Texting text="Total: " colors={COLORS.light01} fontSize={18} />
          <Texting
            text="$ 100.00"
            colors={COLORS.black}
            fontSize={18}
            fonts={FONTS.bold}
          />
        </Pressable>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <ButtonPrimary
          textButton="SUBMIT ORDER"
          marginTop={15}
          handleOnpressButton={() => navigation.navigate('Purchase')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderShippingAddress />
      <_renderPayment />
      <_renderDelivery />
      <_renderFee />
      <_renderFooter />
    </View>
  );
};

export default Checkout;
