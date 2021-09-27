import React from 'react';
import {View, Pressable} from 'react-native';
import {Texting} from '../../../../../../../components';
import {FONTS} from '../../../../../../../constants';
import styles from './styles';

const StatusTab = ({handleOnpress, text, colors, checked, style}) => {
  return (
    <View style={styles.wrapperTypes}>
      <View style={styles.wrapperTabs}>
        <Pressable style={{alignItems: 'center'}} onPress={handleOnpress}>
          <Texting
            text={text}
            colors={colors}
            fonts={FONTS.bold}
            fontSize={18}
          />
          <View style={({...style}, styles.lines)}>{checked}</View>
        </Pressable>
      </View>
    </View>
  );
};

export default StatusTab;
