import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  wrapperShipping: {
    marginBottom: 30,
  },
  wrapperTitleShipping: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    elevation: 15,
    borderRadius: 8,
  },
  lineShipping: {
    borderRadius: 6,
    backgroundColor: '#F0F0F0',
    height: 2,
    marginVertical: 10,
  },
  wrapperPayment: {
    marginBottom: 30,
  },
  wrapperMasterCard: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.65,
    elevation: 6,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  wrapperDelivery: {
    marginBottom: 40,
  },
  wrapperFee: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperFooter: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});
export default styles;
