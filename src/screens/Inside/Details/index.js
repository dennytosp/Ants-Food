import React, {useState} from 'react';
import {Pressable, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Back, Plus, Less, Stared, Save} from '../../../assets/svg';
import {ButtonPrimary, Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {width} from '../../../utils/reponsive';

const Details = ({route}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {item: receive} = route.params;
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState();

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Pressable style={styles.wrapperContentImage}>
          <Image source={receive.image} style={styles.imageContent} />
        </Pressable>
        <Pressable
          style={{top: top, ...styles.wrapperGoBack}}
          onPress={() => navigation.goBack()}>
          <Back />
        </Pressable>
      </View>
    );
  };

  const _renderTitle = () => {
    return (
      <View style={styles.wrapperTitle}>
        <Texting
          text={receive.name}
          colors={COLORS.black}
          fonts={FONTS.gelasioMedium}
          fontSize={24}
        />

        <View style={styles.wrapperPriceAmount}>
          <Texting
            text={receive.price}
            colors={COLORS.black}
            fonts={FONTS.bold}
            fontSize={30}
          />
          <View style={styles.wrapperRightAmout}>
            <Pressable
              onPress={() => setCount(count + 1)}
              style={styles.wrapperIconAmount}>
              <Plus />
            </Pressable>

            <View style={styles.wrapperTxtAmount}>
              <Texting
                text={count}
                colors={COLORS.black}
                fonts={FONTS.semiBold}
                fontSize={18}
              />
            </View>

            <Pressable
              onPress={() => (count <= 1 ? setCount(1) : setCount(count - 1))}
              style={styles.wrapperIconAmount}>
              <Less />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperReviews}>
          <Pressable style={styles.wrapperStared}>
            <Stared />
          </Pressable>
          <Texting
            text="4.5"
            colors={COLORS.black}
            fontSize={18}
            fonts={FONTS.bold}
          />

          <Pressable
            style={{marginHorizontal: 20}}
            onPress={() => navigation.navigate('Rating')}>
            <Texting
              text="(50 reviews)"
              colors={COLORS.light02}
              fonts={FONTS.semiBold}
            />
          </Pressable>
        </View>
        <Texting
          textAlign="justify"
          lineHeight={22.1}
          text="Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. "
          colors={COLORS.light}
          fonts={FONTS.light}
        />
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.wrapperFooter}>
        <Pressable
          style={styles.wrapperSave}
          onPress={() => navigation.navigate('Saved')}>
          <Save />
        </Pressable>

        <ButtonPrimary
          textButton="GET IT"
          width={width / 1.35}
          handleOnpressButton={() => navigation.navigate('Cart')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderTitle />
      <_renderContent />
      <_renderFooter />
    </View>
  );
};

export default Details;
