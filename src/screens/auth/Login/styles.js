import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  lineHeader: {
    backgroundColor: COLORS.gray03,
    height: 1,
    width: width / 3.25,
  },
  wrapperLogo: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 1,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperTitle: {
    marginBottom: 30,
  },
  txtHello: {
    color: '#909090',
    fontSize: 24,
    fontFamily: FONTS.gelasioSemiBold,
  },
  txtWelcome: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: FONTS.gelasioBold,
  },
  wrapperCenter: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.65,
    elevation: 7,
    borderRadius: 2,
  },
  wrapperForgot: {
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 45,
    marginTop: 30,
  },
  lineActive: {
    backgroundColor: COLORS.green,
  },
  lineNotActive: {
    backgroundColor: '#E0E0E0',
  },
});
export default styles;
