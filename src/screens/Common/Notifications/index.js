import React from 'react';
import {View, Pressable, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Header, Texting} from '../../../components';
import {Search} from '../../../assets/svg';

import {COLORS, FONTS} from '../../../constants';
import {DATA_NOTIFICATIONS} from '../../../assets/data';

const Notifications = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <Header paddingHorizontal={15} title="NOTIFICATIONS" leftIcon={Search} />
    );
  };

  const _renderNotifications = ({item}) => {
    return (
      <View style={styles.wrapperNotifications}>
        <View style={styles.boxNotifications}>
          <Pressable style={styles.wrapperImageContent}>
            <Image source={item.image} style={styles.imageContent} />
          </Pressable>
          <View style={styles.wrapperTextContent}>
            <Texting
              text={item.title}
              fonts={FONTS.bold}
              colors={COLORS.black}
              marginBottom={5}
            />
            <Texting
              text={item.subtitle}
              fonts={FONTS.regular}
              textAlign="justify"
              colors={COLORS.light02}
              fontSize={12}
            />
          </View>
        </View>

        <View style={styles.wrapperStatus}>
          <Texting
            text={item.status}
            colors={item.status == 'NEW' ? '#27AE60' : '#EB5757'}
            fonts={FONTS.extraBold}
          />
        </View>

        <View style={styles.lines}></View>
      </View>
    );
  };

  const _renderFlatNotifications = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_NOTIFICATIONS}
        renderItem={_renderNotifications}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderFlatNotifications />
    </View>
  );
};

export default Notifications;
