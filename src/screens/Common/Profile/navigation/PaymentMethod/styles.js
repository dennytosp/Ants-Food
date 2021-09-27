import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperPaymentMethod: {
    marginBottom: 15,
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
  wrapperCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
});
export default styles;
