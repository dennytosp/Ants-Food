import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {Texting} from '..';
import {Eye} from '../../assets/svg';
import {COLORS} from '../../constants';
import styles from './styles';

const FormAuth = ({
  text,
  onFocus,
  onPrimary,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
  eye,
  inputFirst,
  checkEnd,
  style,
}) => {
  return (
    <View style={{...styles.wrapperInput(inputFirst)}}>
      <Texting text={text} colors={COLORS.light01} />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.inputField}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />

        {eye ? (
          <Pressable style={styles.wrapperEye}>
            <Eye />
          </Pressable>
        ) : null}
      </View>

      <View
        style={{
          ...style,
          ...styles.lineInput(onPrimary, checkEnd),
        }}></View>
    </View>
  );
};

export default FormAuth;
