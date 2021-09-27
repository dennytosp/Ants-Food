import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperInput: {
    paddingHorizontal: 15,
    // marginBottom: 40,
  },
  wrapperFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
});
export default styles;
