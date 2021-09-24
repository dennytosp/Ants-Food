import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Search, Bag, Carted, Edit, Remove, BagBlack} from '../../../assets/svg';
import {ButtonPrimary, Header, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {DATA_CART, DATA_CATEG, DATA_PRODUCT} from '../../../assets/data';
import {photos} from '../../../assets';

const Saved = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <Header
        title="FAVORITE"
        leftIcon={Search}
        rightIcon={Carted}
        handleOnpressRight={() => navigation.navigate('Cart')}
      />
    );
  };

  const _renderCart = ({item}) => {
    return (
      <View style={styles.wrapperCart}>
        <View style={styles.wrapperSectionCart}>
          <Pressable style={styles.wrapperImageCart}>
            <Image source={item.image} style={styles.imageContent} />
          </Pressable>

          <View style={styles.wrapperTextContent}>
            <Texting text={item.name} fonts={FONTS.semiBold} marginBottom={5} />
            <Texting
              text={item.price}
              fonts={FONTS.bold}
              colors={COLORS.black}
            />
          </View>

          <Pressable style={styles.wrapperRemove}>
            <Remove />
          </Pressable>
          <Pressable style={styles.wrapperBag}>
            <BagBlack />
          </Pressable>
        </View>

        <View style={styles.lineCart}></View>
      </View>
    );
  };

  const _renderFlatCarts = () => {
    return (
      <View style={{marginBottom: 0 * 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_CART}
          renderItem={_renderCart}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <ButtonPrimary
          textButton="GET ALL"
          marginHorizontal
          marginTop={15}
          handleOnpressButton={() => navigation.navigate('Cart')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}>
        <_renderFlatCarts />
      </ScrollView>
      <_renderFooter />
    </View>
  );
};

export default Saved;
