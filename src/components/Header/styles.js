import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperHeadering: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperGoBack: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: getSize.s(50),
    height: getSize.s(50),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
});
export default styles;
