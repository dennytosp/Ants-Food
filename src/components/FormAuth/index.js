import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {Texting} from '..';
import {Eye} from '../../assets/svg';
import {COLORS} from '../../constants';
import styles from './styles';

const FormAuth = ({
  text,
  onFocus,
  placeholder,
  onChange,
  keyboardType,
  secureTextEntry,
  eye,
  inputFirst,
  checkEnd,
  style,
}) => {
  return (
    <View style={{marginTop: inputFirst ? 45 : 0, ...styles.wrapperInput}}>
      <Texting text={text} colors={COLORS.light01} />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.inputField}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
          onChange={onChange}
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
        style={{marginBottom: checkEnd ? 45 : 30, ...styles.lineInput}}></View>
    </View>
  );
};

export default FormAuth;
