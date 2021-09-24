import React from 'react';
import {Pressable, Text} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

const ButtonPrimary = ({
  textButton,
  handleOnpressButton,
  backgroundColor,
  textColors,
  width,
  marginHorizontal,
  marginTop,
  marginBottom,
  style,
}) => {
  return (
    <Pressable
      onPress={handleOnpressButton}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : COLORS.black,
        width: width,
        marginHorizontal: marginHorizontal ? 0 : 15,
        marginTop: marginTop,
        marginBottom: marginBottom,
        ...styles.wrapperButton,
      }}>
      <Text
        style={{
          color: textColors ? textColors : COLORS.white,
          ...styles.txtButton,
        }}>
        {textButton}
      </Text>
    </Pressable>
  );
};

export default ButtonPrimary;
