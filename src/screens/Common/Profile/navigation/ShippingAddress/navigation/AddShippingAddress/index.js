import React from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Inputing, ButtonPrimary} from '../../../../../../../components';
import {width} from '../../../../../../../utils/reponsive';

const AddShippingAddress = ({route}) => {
  const navigation = useNavigation();
  const {addParam, editParam } = route.params;

  const _renderHeader = () => {

    return (
      <View>
        <Header
          title={addParam ? addParam : editParam}
          paddingHorizontal={15}
          marginBottom={45}
          handleOnpressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderInput = () => {
    return (
      <View style={styles.wrapperInput}>
        <Inputing
          borderWrapper
          title="Full name"
          placeholder="Ex: Bruno Pham"
        />
        <Inputing
          borderWrapper
          title="Address"
          placeholder="Ex: 25 Robert Latouche Street"
        />
        <Inputing
          borderWrapper
          title="Zipcode (Postal Code)"
          placeholder="Pham Cong Thanh"
        />
        <Inputing borderWrapper title="Country" placeholder="Select Country" />
        <Inputing borderWrapper title="City" placeholder="New York" />
        <Inputing
          borderWrapper
          title="District"
          placeholder="Select District"
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <ButtonPrimary
          textButton="SAVE ADDRESS"
          handleOnpressButton={() => console.log('Saved Address')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: width / 6}}>
        <_renderInput />
      </ScrollView>
      <_renderFooter />
    </View>
  );
};

export default AddShippingAddress;
