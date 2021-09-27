import React, {useState} from 'react';
import {View, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Texting} from '../../../../../components';
import {Edit, PlusAdding} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {DATA_SHIPPING_ADDRESS} from '../../../../../assets/data';
import {CheckBox} from 'react-native-elements';
import {width} from '../../../../../utils/reponsive';

const ShippingAddress = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState([]);

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="SHIPPING ADDRESS"
          handleOnpressLeft={() => navigation.goBack()}
          marginBottom={15 / 2}
          paddingHorizontal={15}
        />
      </View>
    );
  };

  const _renderCarding = ({item}) => {
    return (
      <View style={styles.wrapperCarding}>
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
            text="Use as the shipping address"
            colors={COLORS.light02}
            lineHeight={24.55}
            fontSize={16}
          />
        </View>

        <View style={styles.wrapperCard}>
          <View style={styles.wrapperColumn01}>
            <Texting
              text={item.name}
              colors={COLORS.black}
              fonts={FONTS.bold}
              lineHeight={24.55}
              fontSize={18}
            />
            <Pressable style={styles.wrapperEdit}>
              <Edit />
            </Pressable>
          </View>

          <View style={styles.lines}></View>
          <View style={styles.wrapperColumn02}>
            <Texting
              text={item.address}
              textAlign="justify"
              lineHeight={25}
              colors={COLORS.light02}
            />
          </View>
        </View>
      </View>
    );
  };

  const _renderFlatEvent = () => {
    return (
      <FlatList
        style={{marginBottom: width / 4.5}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 15}}
        data={DATA_SHIPPING_ADDRESS}
        renderItem={_renderCarding}
        extraData={checked}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  const _renderFooter = () => {
    return (
      <Pressable
        style={styles.wrapperPlusAdding}
        onPress={() =>
          navigation.navigate('AddShippingAddress', {
            addParam: 'ADD SHIPPING ADDRESS',
          })
        }>
        <PlusAdding />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderFlatEvent />
      <_renderFooter />
    </View>
  );
};

export default ShippingAddress;
