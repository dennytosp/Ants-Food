import React, {useState} from 'react';
import {
  View,
  Pressable,
  Image,
  FlatList,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {
  CardRow,
  Editing,
  Header,
  Inputing,
  Texting,
} from '../../../../../components';
import {
  ForwardGrey,
  Logout,
  Notifications,
  Search,
} from '../../../../../assets/svg';
import {COLORS, FONTS} from '../../../../../constants';
import {photos} from '../../../../../assets';
import {DATA_EVENT_PROFILE} from '../../../../../assets/data';
import {getSize} from '../../../../../utils/reponsive';
import {Switch} from 'react-native-elements/dist/switch/switch';

const Settings = () => {
  const navigation = useNavigation();
  const [isSwitchEnabled, setSwitch] = useState(true);

  const thumbColorOn = Platform.OS === 'android' ? COLORS.white : COLORS.white;
  const thumbColorOff = Platform.OS === 'android' ? COLORS.white : COLORS.white;
  const trackColorOn = Platform.OS === 'android' ? COLORS.green : COLORS.green;
  const trackColorOff =
    Platform.OS === 'android' ? COLORS.gray02 : COLORS.gray02;

  const _renderHeader = () => {
    return (
      <View>
        <Header
          title="SETTINGS"
          paddingHorizontal={15}
          handleOnpressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderPersonalInformation = () => {
    return (
      <View style={styles.wrapperPersonalInfomartion}>
        <Editing title="Personal Information" size marginBottom={15} />
        <Inputing title="Name" placeholder="Dinh Tien Phong" />
        <Inputing
          title="Email"
          placeholder="dinhtienphong@gmail.com"
          keyboardType="email-address"
        />
      </View>
    );
  };

  const _renderPassword = () => {
    return (
      <View style={styles.wrapperPersonalInfomartion}>
        <Editing title="Password" size marginBottom={15} />
        <Inputing
          title="Password"
          placeholder="*************"
          secureTextEntry
        />
        <Inputing
          title="Confirm password"
          placeholder="*************"
          secureTextEntry
        />
      </View>
    );
  };

  const _renderNotifications = () => {
    return (
      <View style={styles.wrapperNotifications}>
        <Editing title="Notifications" size marginBottom={15} icon />
        <CardRow title="Sales" switching />
        <CardRow title="New arrivals" switching />
        <CardRow title="Delivery status changes" switching />
      </View>
    );
  };

  const _renderHelpCenter = () => {
    return (
      <View style={styles.wrapperHelpCenter}>
        <Editing title="Help Center" size marginBottom={15} icon />
        <CardRow title="FAQ" handleOnpress={() => console.log('FAQ')} />
        <CardRow
          title="Contact Us"
          handleOnpress={() => console.log('Contact Us')}
        />
        <CardRow
          title="Privacy & Terms"
          handleOnpress={() => console.log('Privacy & Terms')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <_renderPersonalInformation />
        <_renderPassword />
        <_renderNotifications />
        <_renderHelpCenter />
      </ScrollView>
    </View>
  );
};

export default Settings;
