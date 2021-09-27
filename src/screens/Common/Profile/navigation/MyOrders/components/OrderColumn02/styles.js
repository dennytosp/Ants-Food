import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/reponsive';
import {COLORS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  wrapperColumn02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  wrapperQuantity: {
    flexDirection: 'row',
  },
  wrapperTotalAmount: {
    flexDirection: 'row',
  },
});
export default styles;
