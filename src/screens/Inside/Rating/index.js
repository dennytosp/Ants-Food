import React from 'react';
import {Pressable, View, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Stared} from '../../../assets/svg';
import {ButtonPrimary, Header, StarRender, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {photos} from './../../../assets';
import {DATA_REVIEWS} from './../../../assets/data';

const Rating = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <Header
        title="RATING & REVIEW"
        paddingHorizontal={15}
        handleOnpressLeft={() => navigation.goBack()}
      />
    );
  };

  const _renderStar = () => {
    return (
      <View style={styles.wrapperStarReviews}>
        <StarRender />
        <StarRender />
        <StarRender />
        <StarRender />
        <StarRender />
      </View>
    );
  };

  const _renderProduct = () => {
    return (
      <View>
        <View style={styles.wrapperProduct}>
          <Pressable styles={styles.wrapperImageProduct}>
            <Image style={styles.imageProduct} source={photos.product02} />
          </Pressable>

          <View style={styles.wrapperTextContent}>
            <Texting text="Minimal Stand" />
            <View style={styles.wrapperStar}>
              <Stared />
              <Texting
                text="4.5"
                fonts={FONTS.bold}
                fontSize={24}
                colors={COLORS.black}
                marginHorizontal={12.5}
                marginVertical={12.5}
              />
            </View>

            <Texting
              text="10 reviews"
              fonts={FONTS.semiBold}
              fontSize={18}
              colors={COLORS.black}
            />
          </View>
        </View>
        <View style={styles.lines}></View>
      </View>
    );
  };

  const _renderContent = ({item}) => {
    return (
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperCard}>
          <Pressable style={styles.wrapperImageUser}>
            <Image source={item.image} style={styles.imageUser} />
          </Pressable>

          <View style={styles.wrapperTitleRow}>
            <Texting
              text={item.name}
              fonts={FONTS.semiBold}
              colors={COLORS.black}
            />
            <Texting text={item.time} fontSize={12} colors={COLORS.black} />
          </View>

          <_renderStar />

          <Texting
            text={item.content}
            colors={COLORS.black}
            textAlign="justify"
          />
        </View>
      </View>
    );
  };

  const _renderFlatReviews = () => {
    return (
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={DATA_REVIEWS}
        renderItem={_renderContent}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  const _renderFooter = () => {
    return <ButtonPrimary textButton="Write a review" marginBottom={15} />;
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderProduct />
      <_renderFlatReviews />
      <_renderFooter />
    </View>
  );
};

export default Rating;
