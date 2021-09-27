import React, {useState} from 'react';
import {View, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Method, Texting} from '../../../../../components';
import {COLORS} from '../../../../../constants';
import {DATA_METHODS} from '../../../../../assets/data';
import {CheckBox} from 'react-native-elements';
import {PlusAdding} from '../../../../../assets/svg';

const PaymentMethod = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState([]);

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="PAYMENT METHOD"
          handleOnpressLeft={() => navigation.goBack()}
          paddingHorizontal={15}
          marginBottom={45}
        />
      </View>
    );
  };

  const _renderPaymentMethod = ({item}) => {
    return (
      <View style={styles.wrapperPaymentMethod}>
        <Method
          id_card={item.id_card}
          name={item.name}
          background={item.background}
          typeMethod={item.typeMethod}
          time={item.time}
        />
        {/* Checkbox */}
        <View style={styles.wrapperCheckBox}>
          <CheckBox
            checkedColor={COLORS.black}
            checked={checked.includes(item.id)}
            onPress={() => {
              const newIds = [...checked];
              const index = newIds.indexOf(item.id);
              if (index > -1) {
                // newIds.splice(index, 1);
              } else {
                newIds.splice(index, 1);
                newIds.push(item.id);
              }
              setChecked(newIds);
            }}
          />
          <Texting
            marginTop={-3}
            marginLeft={-15}
            text="Use as default payment method"
            colors={COLORS.black01}
            lineHeight={24.55}
          />
        </View>
      </View>
    );
  };

  const _renderFlatPaymentMethod = () => {
    return (
      <FlatList
        style={{marginBottom: 60}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        data={DATA_METHODS}
        extraData={checked}
        renderItem={_renderPaymentMethod}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  const _renderFooter = () => {
    return (
      <Pressable
        style={styles.wrapperPlusAdding}
        onPress={() => navigation.navigate('AddPaymentMethod')}>
        <PlusAdding />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderFlatPaymentMethod />
      <_renderFooter />
    </View>
  );
};

export default PaymentMethod;
