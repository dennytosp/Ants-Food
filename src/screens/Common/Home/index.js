import React, {useState} from 'react';
import {FlatList, Pressable, View, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Search, Carted, Bag} from '../../../assets/svg';
import {Texting} from '../../../components';
import {COLORS, FONTS} from '../../../constants';
import {DATA_CATEG, DATA_PRODUCT} from '../../../assets/data';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  // const [status, setStatus] = useState('All');
  // const [data, setData] = useState(DATA_PRODUCT);

  // const setStatusFilter = status => {
  //   if (status != 'All') {
  //     setData([...DATA_PRODUCT.filter(e => e.status == status)]);
  //   } else {
  //     setData(DATA_PRODUCT);
  //   }
  //   setStatus(status);
  // };

  const _renderHeader = () => {
    return (
      <View style={{marginTop: top, ...styles.wrapperHeader}}>
        <Pressable>
          <Search />
        </Pressable>
        <View style={{alignItems: 'center'}}>
          <Texting
            fonts={FONTS.gelasioRegular}
            fontSize={18}
            text="Make Home"
            colors={COLORS.light01}
          />
          <Texting
            fonts={FONTS.gelasioBold}
            fontSize={18}
            text="BEAUTIFUL"
            colors={COLORS.black}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Carted />
        </Pressable>
      </View>
    );
  };

  const _renderCategories = ({item, index}) => {
    return (
      <View
        style={{
          marginLeft: index === 0 ? 0 : 25,
          ...styles.wrapperCategories,
        }}>
        <Pressable
          // onPress={() => setStatusFilter(item.status)}
          style={{
            backgroundColor: index === 0 ? COLORS.black : COLORS.gray06,
            ...styles.wrapperItemSelect,
          }}>
          {item.image}
        </Pressable>
        <Texting text={item.name} colors={COLORS.light02} />
      </View>
    );
  };

  const _renderFlatCategories = () => {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA_CATEG}
          renderItem={_renderCategories}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const _renderCenter = ({item}) => {
    return (
      <View style={styles.wrapperCenter}>
        <View>
          <Pressable
            style={styles.wrapperImage}
            onPress={() => navigation.navigate('Details', {item})}>
            <Image source={item.image} style={styles.imageProduct} />
          </Pressable>
          <Pressable style={styles.wrapperBag}>
            <Bag />
          </Pressable>
        </View>
        <View style={styles.warpperTextProduct}>
          <Texting text={item.name} />
          <Texting text={item.price} colors={COLORS.black} fonts={FONTS.bold} />
        </View>
      </View>
    );
  };

  const _renderFlatProducts = () => {
    return (
      <View>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={DATA_PRODUCT}
          renderItem={_renderCenter}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderFlatCategories />
      <ScrollView
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}>
        <_renderFlatProducts />
      </ScrollView>
    </View>
  );
};

export default Home;
