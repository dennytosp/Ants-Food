import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperUserInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapperAvatar: {
    marginHorizontal: 15,
  },
  imageAvatar: {
    width: getSize.s(70),
    height: getSize.s(70),
    borderRadius: getSize.s(70 / 2),
  },
  wrapperTextInformation: {},
  wrapperEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 12,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.65,
    elevation: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },
  wrapperTextEvent: {},
  wrapperForward: {},
});
export default styles;
