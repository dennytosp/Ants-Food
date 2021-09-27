import React, {useState} from 'react';
import {Platform, Pressable, View} from 'react-native';
import {Texting} from '..';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';
import {Switch} from 'react-native-elements/dist/switch/switch';
import {ForwardGrey} from '../../assets/svg';

const CardRow = ({title, switching, handleOnpress, icons}) => {
  const [isSwitchEnabled, setSwitch] = useState(false);

  const thumbColorOn = Platform.OS === 'android' ? COLORS.white : COLORS.white;
  const thumbColorOff = Platform.OS === 'android' ? COLORS.white : COLORS.white;
  const trackColorOn = Platform.OS === 'android' ? COLORS.green : COLORS.green;
  const trackColorOff =
    Platform.OS === 'android' ? COLORS.gray02 : COLORS.gray02;

  return (
    <Pressable
      onPress={handleOnpress}
      style={styles.wrapperCardInsideNotifi}>
      <Texting
        colors={COLORS.black01}
        fontSize={16}
        fonts={FONTS.semiBold}
        text={title}
      />
      {switching ? (
        <Switch
          value={isSwitchEnabled}
          onValueChange={value => setSwitch(value)}
          thumbColor={isSwitchEnabled ? thumbColorOn : thumbColorOff}
          trackColor={{false: trackColorOff, true: trackColorOn}}
          ios_backgroundColor={trackColorOff}
        />
      ) : (
        <Pressable>
          <ForwardGrey />
        </Pressable>
      )}
    </Pressable>
  );
};

export default CardRow;
