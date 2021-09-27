import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';

const Texting = ({
  text,
  colors,
  fonts,
  fontSize,
  textAlign,
  lineHeight,
  marginTop,
  marginLeft,
  marginBottom,
  marginHorizontal,
  marginVertical,
  zIndex,
  flexWrap,
  flex,
  alignItems,
  style,
}) => {
  return (
    <View style={({...style}, styles.wrapperTexting)}>
      <Text
        style={{
          color: colors ? colors : COLORS.light,
          fontFamily: fonts ? fonts : FONTS.regular,
          fontSize: fontSize ? fontSize : 14,
          textAlign: textAlign,
          lineHeight: lineHeight,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
          zIndex: zIndex,
          flexWrap: flexWrap,
          alignItems: alignItems,
          flex: flex,
          ...styles.textingDefault,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Texting;
