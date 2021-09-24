import {StyleSheet} from 'react-native';
import {getSize, height, width} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: 15,
  },
  wrapperHeader: {
    marginBottom: 20,
  },
  wrapperContentImage: {},
  imageContent: {
    width: width,
    height: height / 2,
    borderBottomLeftRadius: 50,
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
    position: 'absolute',
    left: 15,
  },
  wrapperTitle: {
    paddingHorizontal: 15,
  },
  wrapperPriceAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wrapperRightAmout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIconAmount: {
    backgroundColor: COLORS.gray06,
    borderRadius: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperTxtAmount: {
    marginHorizontal: 15,
  },
  wrapperContent: {
    paddingHorizontal: 15,
    marginBottom: 45,
  },
  wrapperReviews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  wrapperStared: {
    marginRight: 10,
  },
  wrapperFooter: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  wrapperSave: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.gray06,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
