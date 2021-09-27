import React from 'react';
import {View} from 'react-native';
import {Texting} from '../../../../../../../components';
import {COLORS, FONTS} from '../../../../../../../constants';
import styles from './styles';

const Column02 = ({quantity, total}) => {
  return (
    <View style={styles.wrapperColumn02}>
      <View style={styles.wrapperQuantity}>
        <Texting
          text="Quantity: "
          colors={COLORS.light01}
          fonts={FONTS.semiBold}
          fontSize={16}
        />
        <Texting
          text={quantity}
          colors={COLORS.black}
          fontSize={16}
          fonts={FONTS.bold}
        />
      </View>

      <View style={styles.wrapperTotalAmount}>
        <Texting
          text="Total Amount: "
          colors={COLORS.light01}
          fonts={FONTS.semiBold}
          fontSize={16}
        />
        <Texting
          text={total}
          colors={COLORS.black}
          fontSize={16}
          fonts={FONTS.bold}
        />
      </View>
    </View>
  );
};

export default Column02;
