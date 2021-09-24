import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperBackground: {},
  imgBackground: {
    width: width,
    height: height,
    flex: 1,
  },
  wrapperCenter: {
    paddingLeft: 50,
  },
  title01: {
    fontSize: 24,
    color: COLORS.light,
    fontFamily: FONTS.gelasioSemiBold,
    marginBottom: 15,
  },
  title02: {
    fontSize: 30,
    color: COLORS.black,
    fontFamily: FONTS.gelasioBold,
    marginBottom: 30,
  },
  subTitle: {
    // marginLeft: 30,
    fontSize: 18,
    fontFamily: FONTS.regular,
    textAlign: 'justify',
    color: '#808080',
    paddingLeft: 30,
    paddingRight: 60,
  },
  wrapperFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
  },
  wrapperButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#212121',
    borderRadius: 4,
  },
  txtStarted: {
    fontFamily: FONTS.gelasioSemiBold,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
  },
});
export default styles;
