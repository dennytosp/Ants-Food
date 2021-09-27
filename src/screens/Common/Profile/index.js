import React from 'react';
import {View, Pressable, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {Header, Texting} from '../../../components';
import {ForwardGrey, Logout, Search} from '../../../assets/svg';
import {COLORS, FONTS} from '../../../constants';
import {photos} from './../../../assets';
import {DATA_EVENT_PROFILE} from './../../../assets/data';

const Profile = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="PROFILE"
          leftIcon={Search}
          rightIcon={Logout}
          paddingHorizontal={15}
          handleOnpressRight={() => navigation.navigate('Login')}
        />
      </View>
    );
  };

  const _renderUserInformation = () => {
    return (
      <View style={styles.wrapperUserInformation}>
        <Pressable style={styles.wrapperAvatar}>
          <Image source={photos.user} style={styles.imageAvatar} />
        </Pressable>
        <View style={styles.wrapperTextInformation}>
          <Texting
            text="Dinh Phong"
            colors={COLORS.black}
            fonts={FONTS.bold}
            fontSize={20}
            marginVertical={2.5}
          />
          <Texting text="dinhtienphong@gmail.com" colors={COLORS.light02} />
        </View>
      </View>
    );
  };

  const _renderEvent = ({item}) => {
    return (
      <Pressable
        style={styles.wrapperEvent}
        onPress={() => navigation.navigate(item.navigation)}>
        <View style={styles.wrapperTextEvent}>
          <Texting
            text={item.title}
            colors={COLORS.black}
            fonts={FONTS.bold}
            fontSize={18}
            marginBottom={5}
          />
          <Texting text={item.subtitle} colors={COLORS.light02} />
        </View>
        <Pressable style={styles.wrapperForward}>
          <ForwardGrey />
        </Pressable>
      </Pressable>
    );
  };

  const _renderFlatEvent = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 15}}
        data={DATA_EVENT_PROFILE}
        renderItem={_renderEvent}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <_renderUserInformation />
      <_renderFlatEvent />
    </View>
  );
};

export default Profile;
