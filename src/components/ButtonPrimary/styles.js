import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {width} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30.65,
    elevation: 8,
  },
  txtButton: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    lineHeight: 27,
  },
});
export default styles;
