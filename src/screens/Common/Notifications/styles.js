import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS} from './../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperNotifications: {
    marginBottom: 15,
    // backgroundColor: COLORS.gray00,
    // paddingTop: 15,
  },
  boxNotifications: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperImageContent: {
    marginLeft: 15,
  },
  imageContent: {
    width: getSize.s(70),
    height: getSize.s(70),
    borderRadius: 6,
  },
  wrapperTextContent: {
    paddingHorizontal: 10,
    flex: 1,
  },
  wrapperStatus: {
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
  lines: {
    borderRadius: 10,
    marginTop: 15,
    height: 2 / 2,
    backgroundColor: COLORS.gray00,
    marginHorizontal: 15,
  },
});
export default styles;
