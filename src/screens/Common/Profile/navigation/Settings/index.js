import React from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {CardRow, Editing, Header, Inputing} from '../../../../../components';

const Settings = () => {
  const navigation = useNavigation();

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
