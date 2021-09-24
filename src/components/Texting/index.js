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
  marginBottom,
  marginHorizontal,
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
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
          ...styles.textingDefault,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Texting;
