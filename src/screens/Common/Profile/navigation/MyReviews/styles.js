import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperCarding: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 11,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 8,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  wrapperCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProduct: {
    width: getSize.s(70),
    height: getSize.s(70),
    borderRadius: 6,
  },
  wrapperTextContent: {
    paddingHorizontal: 20,
    flex: 1,
  },
  wrapperRowStar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});
export default styles;
