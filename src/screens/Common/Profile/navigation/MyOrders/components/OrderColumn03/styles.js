import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/reponsive';
import {COLORS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  wrapperEventButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperButtonDetail: {
    backgroundColor: COLORS.black,
    height: getSize.s(36),
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    paddingVertical: 7.5,
    paddingHorizontal: 30,
  },
});
export default styles;
