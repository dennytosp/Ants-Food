import React, {useState} from 'react';
import {FlatList, Pressable, View, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Remove, Plus, Less} from '../../../assets/svg';
import {ButtonPrimary, Header, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {DATA_CART} from '../../../assets/data';

const Cart = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const _renderHeader = () => {
    return (
      <Header title="MY CART" handleOnpressLeft={() => navigation.goBack()} />
    );
  };

  const _renderCart = ({item}) => {
    return (
      <View style={styles.wrapperCart}>
        <View style={styles.wrapperSectionCart}>
          <Pressable
            style={styles.wrapperImageCart}
            onPress={() => navigation.navigate('Details', {item})}>
            <Image source={item.image} style={styles.imageContent} />
          </Pressable>

          <View style={styles.wrapperTextContent}>
            <Texting text={item.name} fonts={FONTS.semiBold} marginBottom={5} />
            <View style={styles.wrapperFlexEndCart}>
              <View style={styles.wrapperFlexCenter}>
                <Pressable
                  onPress={() => setCount(count + 1)}
                  style={styles.wrapperAmount}>
                  <Plus />
                </Pressable>
                <Texting
                  text={count}
                  fontSize={18}
                  fonts={FONTS.semiBold}
                  colors={COLORS.black}
                  marginHorizontal={15}
                />
                <Pressable
                  onPress={() =>
                    count <= 1 ? setCount(1) : setCount(count - 1)
                  }
                  style={styles.wrapperAmount}>
                  <Less />
                </Pressable>
              </View>
            </View>
          </View>

          <Pressable style={styles.wrapperRemove}>
            <Remove />
          </Pressable>

          <Pressable style={styles.wrapperTextPrice}>
            <Texting
              text={item.price}
              fontSize={16}
              fonts={FONTS.bold}
              colors={COLORS.black}
            />
          </Pressable>
        </View>
        <View style={styles.lineCart}></View>
      </View>
    );
  };

  const _renderFlatCarts = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_CART}
        renderItem={_renderCart}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        {/* <Pressable style={styles.wrapperForward}>
            <Forward />
          </Pressable> */}
        <View style={styles.wrapperTotal}>
          <Texting
            text="Total"
            fontSize={20}
            fonts={FONTS.bold}
            colors={COLORS.light02}
          />
          <Texting
            text="$ 95.00"
            fontSize={20}
            fonts={FONTS.bold}
            colors={COLORS.black}
          />
        </View>
        <ButtonPrimary
          handleOnpressButton={() => navigation.navigate('Checkout')}
          textButton="CHECK OUT"
          marginHorizontal
          marginTop={15}
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

export default Cart;
