import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperCenter: {
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperImageCenter: {
    marginBottom: 30,
  },
  wrapperEvent: {},
  wrapperButton: {
    borderRadius: 8,
    borderColor: COLORS.black,
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 15,
  },
});
export default styles;
