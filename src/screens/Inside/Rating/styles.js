import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperProduct: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  wrapperImageProduct: {},
  wrapperTextContent: {
    paddingHorizontal: 15,
  },
  imageProduct: {
    width: getSize.s(100),
    height: getSize.s(100),
    borderRadius: 10,
  },
  wrapperStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lines: {
    borderRadius: 10,
    marginTop: 10,
    height: 1,
    backgroundColor: COLORS.gray00,
  },
  wrapperContent: {
    marginTop: 45,
    marginBottom: 10,
  },
  wrapperTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  wrapperImageUser: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUser: {
    width: getSize.s(50),
    height: getSize.s(50),
    borderRadius: 50 / 2,
  },
  wrapperCard: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.65,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
  wrapperStarReviews: {
    flexDirection: 'row',
    marginBottom: 15,
  },
});
export default styles;
