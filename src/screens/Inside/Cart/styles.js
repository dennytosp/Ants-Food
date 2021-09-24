import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperCart: {
    marginBottom: 20,
  },
  wrapperSectionCart: {
    flexDirection: 'row',
  },
  wrapperImageCart: {},
  imageContent: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  wrapperTextContent: {
    paddingHorizontal: 15,
  },
  wrapperRemove: {
    position: 'absolute',
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3 / 2,
    borderColor: COLORS.gray03,
  },
  lineCart: {
    backgroundColor: '#F0F0F0',
    height: 1,
    borderRadius: 10,
    marginTop: 15,
  },
  wrapperFooter: {
    marginBottom: 20,
  },
  wrapperFlexEndCart: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },
  wrapperFlexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperForward: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperAmount: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.gray06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  wrapperTextPrice: {
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  wrapperTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
export default styles;
