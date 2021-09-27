import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
  wrapperCarding: {
    // paddingHorizontal: 15,
  },
  wrapperCard: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.65,
    elevation: 10,
    borderRadius: 8,
    paddingVertical: 15,
  },
  wrapperColumn01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  wrapperEdit: {},
  lines: {
    backgroundColor: COLORS.gray00,
    height: 2,
    borderRadius: 6,
    marginVertical: 10,
  },
  wrapperColumn02: {
    paddingHorizontal: 20,
  },
  wrapperPlusAdding: {
    width: getSize.s(60),
    height: getSize.s(60),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 11,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 35,
    right: 15,
  },
});
export default styles;
