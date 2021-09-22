import React from 'react';
import {Pressable, Text} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

const ButtonPrimary = ({
  textButton,
  handleOnpressButton,
  checkNotPrimary,
  style,
}) => {
  return (
    <Pressable
      onPress={handleOnpressButton}
      style={{
        backgroundColor: checkNotPrimary ? COLORS.gray00 : COLORS.primary,
        ...styles.wrapperButton,
      }}>
      <Text
        style={{
          color: checkNotPrimary ? COLORS.dark : COLORS.white,
          ...styles.txtButton,
        }}>
        {textButton}
      </Text>
    </Pressable>
  );
};

export default ButtonPrimary;
