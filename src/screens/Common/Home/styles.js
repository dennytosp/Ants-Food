import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from './../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperCategories: {
    marginVertical: 20,
    alignItems: 'center',
  },
  wrapperItemSelect: {
    
    width: getSize.s(42),
    height: getSize.s(42),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  wrapperCenter: {
    marginRight: 15,
    marginBottom: 15,
  },
  wrapperImage: {},
  imageProduct: {
    width: width / 2 - 22,
    height: 200,
    borderRadius: 10,
  },
  wrapperBag: {
    backgroundColor: COLORS.light01,
    width: getSize.s(25),
    height: getSize.s(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute',
    left: width / 2 - 60,
    bottom: 10,
  },
  warpperTextProduct: {
    marginTop: 10,
  },
});
export default styles;
