import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperInput: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 11,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 12,
    borderRadius: 4,
    paddingTop: 27 / 2,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  wrapperBorderInput: {
    borderRadius: 4,
    // backgroundColor: '#F7F7F7',
    borderColor: COLORS.gray05,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 27 / 2,
    marginBottom: 15,
  },
  input: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black01,
    marginLeft: getSize.m(-4),
    marginTop: getSize.m(-10),
  },

  inputBorder: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black01,
    marginLeft: getSize.m(-4),
    marginTop: getSize.m(-10),
    // fontSize: 16,
  },
});
export default styles;
