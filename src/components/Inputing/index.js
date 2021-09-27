import React from 'react';
import {TextInput, View} from 'react-native';
import {Texting} from '..';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';

const Inputing = ({
  borderWrapper,
  title,
  onFocus,
  onChangeText,
  keyboardType,
  placeholder,
  placeholderTextColor,
  value,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={borderWrapper ? styles.wrapperBorderInput : styles.wrapperInput}>
      <Texting fontSize={12} text={title} fonts={FONTS.regular} />
      <TextInput
        onFocus={onFocus}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={COLORS.black01}
        secureTextEntry={secureTextEntry}
        value={value}
        style={borderWrapper ? styles.inputBorder : styles.input}
      />
    </View>
  );
};

export default Inputing;
