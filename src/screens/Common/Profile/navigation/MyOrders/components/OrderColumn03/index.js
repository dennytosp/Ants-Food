import React from 'react';
import {View, Pressable} from 'react-native';
import {Texting} from '../../../../../../../components';
import {COLORS, FONTS} from '../../../../../../../constants';
import styles from './styles';

const Column03 = ({status, colors}) => {
  return (
    <View style={styles.wrapperEventButton}>
      <Pressable style={styles.wrapperButtonDetail}>
        <Texting
          text="Detail"
          colors={COLORS.white}
          fontSize={16}
          fonts={FONTS.semiBold}
        />
      </Pressable>

      <Texting
        marginHorizontal={15}
        text={status}
        colors={colors}
        fontSize={16}
        fonts={FONTS.semiBold}
      />
    </View>
  );
};

export default Column03;
