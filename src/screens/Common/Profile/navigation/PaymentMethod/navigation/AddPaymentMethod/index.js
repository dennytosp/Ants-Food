import React from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {
  Header,
  Method,
  Inputing,
  ButtonPrimary,
} from '../../../../../../../components';
import {Method01} from '../../../../../../../assets/svg';
import {COLORS} from '../../../../../../../constants';

const AddPaymentMethod = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="ADD PAYMENT METHOD"
          handleOnpressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderMethod = () => {
    return (
      <Method
        id_card="* * * *  * * * *  * * * *  XXXX"
        name="XXXXXX"
        background={COLORS.black01}
        typeMethod={Method01}
        time="XX/XX"
      />
    );
  };

  const _renderInput = () => {
    return (
      <View style={{marginTop: 45}}>
        <Inputing
          borderWrapper
          title="Card Holder Name"
          placeholder="Ex: Bruno Pham"
        />
        <Inputing
          borderWrapper
          title="Card Number"
          placeholder="**** **** **** 3456"
        />
        <Inputing borderWrapper title="CVV" placeholder="Ex: 123" />
        <Inputing borderWrapper title="Expiration Date" placeholder="03/22" />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <ButtonPrimary
          textButton="ADD NEW CARD"
          handleOnpressButton={() => console.log('Add New Card')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapperMarginScroll}>
        <_renderMethod />
        <_renderInput />
      </ScrollView>

      <_renderFooter />
    </View>
  );
};

export default AddPaymentMethod;
