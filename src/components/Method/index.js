import React from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import {Texting} from '..';
import {COLORS, FONTS} from '../../constants';

const Method = ({id_card, background, typeMethod, name, time}) => {
  return (
    <View style={{backgroundColor: background, ...styles.wrapperMethod}}>
      <Pressable style={styles.wrapperIconMethod}>{typeMethod}</Pressable>
      <Texting
        text={id_card}
        fontSize={20}
        marginTop={20}
        marginBottom={30}
        colors={COLORS.white}
        fonts={FONTS.semiBold}
      />
      <View style={styles.wrapperAroundColumn}>
        <View style={styles.wrapperColumn01}>
          <Texting
            text="Card Holder Name"
            colors={COLORS.gray02}
            fontSize={12}
            marginBottom={5}
            fonts={FONTS.semiBold}
          />
          <Texting
            text={name}
            fontSize={14}
            colors={COLORS.white}
            fonts={FONTS.semiBold}
          />
        </View>

        <View style={styles.wrapperColumn02}>
          <Texting
            marginHorizontal={50}
            text="Expiry Date"
            colors={COLORS.gray02}
            fontSize={12}
            marginBottom={5}
            fonts={FONTS.semiBold}
          />
          <Texting
            marginHorizontal={50}
            text={time}
            fontSize={14}
            colors={COLORS.white}
            fonts={FONTS.semiBold}
          />
        </View>
      </View>
    </View>
  );
};

export default Method;
