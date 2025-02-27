import React from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Texting} from '..';
import {Back} from '../../assets/svg';
import {COLORS, FONTS} from '../../constants';
import styles from './styles';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  handleOnpressLeft,
  handleOnpressRight,
  paddingHorizontal,
  marginBottom,
  style,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: marginBottom ? marginBottom : 30,
        paddingHorizontal: paddingHorizontal,
        ...styles.wrapperHeadering,
      }}>
      <Pressable onPress={handleOnpressLeft}>
        {leftIcon ? (
          leftIcon
        ) : (
          // <Pressable onPress={handleOnpressLeft} style={styles.wrapperGoBack}>
          <Back />
          // </Pressable>
        )}
      </Pressable>
      <View
      // style={{marginLeft: rightIcon ? 0 : -30}}
      >
        <Texting
          text={title}
          fontSize={18}
          fonts={FONTS.gelasioBold}
          colors={COLORS.black}
        />
      </View>
      <Pressable onPress={handleOnpressRight}>
        {rightIcon ? rightIcon : null}
      </Pressable>
    </View>
  );
};

export default Header;
