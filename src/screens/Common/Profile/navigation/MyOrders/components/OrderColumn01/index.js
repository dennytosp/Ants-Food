import React from 'react';
import {View} from 'react-native';
import {Texting} from '../../../../../../../components';
import {COLORS, FONTS} from '../../../../../../../constants';
import styles from './styles';

const Column01 = ({id, time}) => {
  return (
    <View style={styles.wrapperTextColum01}>
      <Texting
        text={id}
        colors={COLORS.black}
        fonts={FONTS.semiBold}
        fontSize={16}
      />

      <Texting text={time} colors={COLORS.light01} />
    </View>
  );
};

export default Column01;
