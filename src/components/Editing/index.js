import React from 'react';
import {Pressable, View} from 'react-native';
import {Texting} from '..';
import {Edit} from '../../assets/svg';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';

const Editing = ({title, size, marginBottom, icon, handleOnpress, style}) => {
  return (
    <View style={styles.wrapperTitle}>
      <Texting
        text={title}
        fontSize={size ? 16 : 18}
        colors={COLORS.light01}
        fonts={FONTS.semiBold}
        marginBottom={marginBottom ? marginBottom : 10}
      />
      <Pressable onPress={handleOnpress}>{icon ? null : <Edit />}</Pressable>
    </View>
  );
};

export default Editing;
