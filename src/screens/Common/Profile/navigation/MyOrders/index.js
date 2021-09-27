import React, {useState} from 'react';
import {View, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Texting} from '../../../../../components';
import {COLORS, FONTS} from '../../../../../constants';
import {DATA_ORDER} from './../../../../../assets/data';
import {OrderColumn01, OrderColumn02, OrderColumn03} from './components';

const MyOrders = () => {
  const navigation = useNavigation();

  const [status, setStatus] = useState('All');
  const [data, setData] = useState(DATA_ORDER);

  const setStatusFilter = status => {
    if (status != 'All') {
      setData([...DATA_ORDER.filter(e => e.status == status)]);
    } else {
      setData(DATA_ORDER);
    }
    setStatus(status);
  };

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="MY ORDERS"
          handleOnpressLeft={() => navigation.goBack()}
          paddingHorizontal={15}
        />
      </View>
    );
  };

  const _renderTypes = () => {
    return (
      <View style={styles.wrapperTypes}>
        <View style={styles.wrapperTabs}>
          <Pressable
            style={{alignItems: 'center'}}
            onPress={() => setStatusFilter('All')}>
            <Texting
              text="All"
              colors={status == 'All' ? COLORS.black : COLORS.light01}
              fonts={FONTS.bold}
              fontSize={18}
            />
            <View style={status == 'All' && styles.lines}></View>
          </Pressable>

          <Pressable
            style={{alignItems: 'center'}}
            onPress={() => setStatusFilter('Delivered')}>
            <Texting
              text="Delivered"
              colors={status == 'Delivered' ? COLORS.black : COLORS.light01}
              fonts={FONTS.bold}
              fontSize={18}
            />
            <View style={status == 'Delivered' && styles.lines}></View>
          </Pressable>

          <Pressable
            style={{alignItems: 'center'}}
            onPress={() => setStatusFilter('Processing')}>
            <Texting
              text="Processing"
              colors={status == 'Processing' ? COLORS.black : COLORS.light01}
              fonts={FONTS.bold}
              fontSize={18}
            />
            <View style={status == 'Processing' && styles.lines}></View>
          </Pressable>

          <Pressable
            style={{alignItems: 'center'}}
            onPress={() => setStatusFilter('Canceled')}>
            <Texting
              text="Canceled"
              colors={status == 'Canceled' ? COLORS.black : COLORS.light01}
              fonts={FONTS.bold}
              fontSize={18}
            />
            <View style={status == 'Canceled' && styles.lines}></View>
          </Pressable>
        </View>
      </View>
    );
  };

  const _renderCard = ({item}) => {
    return (
      <View style={styles.wrapperCardAll}>
        <View style={styles.wrapperCard}>
          <OrderColumn01 id={item.id} time={item.time} />
          <View style={styles.lines02}></View>
          <OrderColumn02 quantity={item.quantity} total={item.total} />
          <OrderColumn03
            status={item.status}
            colors={
              item.status == 'Delivered'
                ? COLORS.green
                : item.status == 'Processing'
                ? COLORS.yellow
                : item.status == 'Canceled' && COLORS.red
            }
          />
        </View>
      </View>
    );
  };

  const _renderFlatOrder = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 15}}
        data={data}
        renderItem={_renderCard}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderTypes />
      <_renderFlatOrder />
    </View>
  );
};

export default MyOrders;
