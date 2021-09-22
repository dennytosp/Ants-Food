import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  image: {
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.white,
    lineHeight: 36,
    textAlign: 'center',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 20,
    lineHeight: 16.41,
  },
  dotStyle: {
    backgroundColor: COLORS.black,
  },
  activeDotStyle: {
    backgroundColor: COLORS.white,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: COLORS.white,
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: COLORS.white,
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 40,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -0,
  },
  doneButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.black,
  },
});

export default styles;
