import React from 'react';
import {View, Pressable, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, StarRender, Texting} from '../../../../../components';
import {Search} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {DATA_MY_REVIEWS} from '../../../../../assets/data';

const MyReviews = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Header
          paddingHorizontal={15}
          marginBottom={15}
          title="MY REVIEWS"
          rightIcon={Search}
          handleOnpressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderCarding = ({item}) => {
    return (
      <View style={styles.wrapperCarding}>
        <View style={styles.wrapperCard}>
          <Pressable>
            <Image source={item.image} style={styles.imageProduct} />
          </Pressable>

          <View style={styles.wrapperTextContent}>
            <Texting text={item.name} fontSize={16} fonts={FONTS.semiBold} />
            <Texting
              text={item.price}
              fontSize={16}
              fonts={FONTS.extraBold}
              colors={COLORS.black}
            />
          </View>
        </View>

        <View style={styles.wrapperRowStar}>
          <Pressable style={{flexDirection: 'row'}}>
            <StarRender />
            <StarRender />
            <StarRender />
            <StarRender />
            <StarRender />
          </Pressable>
          <Texting text={item.time} fontSize={12} colors={COLORS.light02} />
        </View>

        <Texting
          textAlign="justify"
          lineHeight={19.1}
          text={item.description}
          colors={COLORS.black}
        />
      </View>
    );
  };

  const _renderFlatMyReviews = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 15}}
        data={DATA_MY_REVIEWS}
        renderItem={_renderCarding}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderFlatMyReviews />
    </View>
  );
};

export default MyReviews;
