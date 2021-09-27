import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperTypes: {
    marginBottom: 25 - 15,
  },
  wrapperTabs: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lines: {
    width: 40,
    height: 4,
    backgroundColor: COLORS.black,
    marginTop: 10,
  },
  wrapperCardAll: {
    marginBottom: 25,
  },
  wrapperCard: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.65,
    elevation: 10,
    borderRadius: 8,
    paddingVertical: 20,
    // marginBottom: 15,
  },
  lines02: {
    backgroundColor: COLORS.gray00,
    height: 2,
    borderRadius: 6,
    marginBottom: 15,
    marginTop: 10,
  },
});
export default styles;
