import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../utils/reponsive';
import {COLORS, FONTS} from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperPersonalInfomartion: {
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  wrapperNotifications: {
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  wrapperHelpCenter: {
    paddingHorizontal: 15,
    marginBottom: 40,
  }
});
export default styles;
