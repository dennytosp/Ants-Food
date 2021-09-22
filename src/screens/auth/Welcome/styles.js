import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  wrapperHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperCenter: {
    // marginBottom: 60,
  },
  wrapperFooter: {

  },
});
export default styles;
