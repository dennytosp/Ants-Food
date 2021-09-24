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
    right: 7.5,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3 / 2,
    borderColor: COLORS.gray03,
  },
  wrapperBag: {
    borderRadius: 10,
    width: 35,
    height: 35,
    backgroundColor: COLORS.gray06,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
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
});
export default styles;
