import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {width} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperInput: (inputFirst) => ({
    paddingHorizontal: 15,
    marginTop: inputFirst ? 45 : 0
  }),
  lineInput: (onPrimary, checkEnd) => ({
    height: 1.5,
    marginBottom: checkEnd ? 45 : 30,
    backgroundColor: onPrimary ? onPrimary : '#E0E0E0',
  }),
  inputField: {},
  wrapperEye: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
});
export default styles;
