import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  wrapperCardInsideNotifi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 11,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 8,
    paddingHorizontal: 35 / 2,
    paddingVertical: 35 / 2,
    borderRadius: 4,
    marginBottom: 10,
  },
});
export default styles;
