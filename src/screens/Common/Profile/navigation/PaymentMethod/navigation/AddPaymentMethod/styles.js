import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
  wrapperMarginScroll: {
    marginBottom: width / 6,
    // marginTop: 45,
  },
});
export default styles;
