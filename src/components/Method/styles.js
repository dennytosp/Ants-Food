import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  wrapperMethod: {
    borderRadius: 7.77,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.65,
    elevation: 12,
    paddingTop: 20,
    paddingBottom: 22.5,
    paddingLeft: 25,
  },
  wrapperIconMethod: {},
  wrapperAroundColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperColumn01: {},
  wrapperColumn02: {},
});
export default styles;
