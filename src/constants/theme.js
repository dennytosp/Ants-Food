import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#303030',
  white: '#FFFFFF',
  dark: '#000',

  light: '#606060',

  gray00: '#ECF0F1',
  gray01: '#F6F6F6',
  gray02: '#E8E8E8',
  gray03: '#BDBDBD',
  gray04: '#666666',

};

export const SIZES = {
  base: 10,
  radius: 20,
  width,
  height,
};

export const FONTS = {
  black: 'NunitoSans-Black',
  bold: 'NunitoSans-Bold',
  extraBold: 'NunitoSans-ExtraBold',
  extraLight: 'NunitoSans-ExtraLight',
  italic: 'NunitoSans-Italic',
  light: 'NunitoSans-Light',
  regular: 'NunitoSans-Regular',
  semiBold: 'NunitoSans-SemiBold',
};

const theme = {COLORS, SIZES, FONTS};
export default theme;
