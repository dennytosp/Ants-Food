import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {CheckBox} from 'react-native-elements';
import {Texting} from '..';
import {COLORS} from '../../constants';

const Checking = ({id, title, style}) => {
  const [checked, setChecked] = useState([]);

  return (
    <View style={styles.wrapperCheckBox}>
      <CheckBox
        checkedColor={COLORS.black}
        checked={checked.includes(id)}
        onPress={() => {
          const newIds = [...checked];
          const index = newIds.indexOf(id);
          if (index > -1) {
            newIds.splice(index, 1);
          } else {
            newIds.splice(index, 1);
            newIds.push(id);
          }
          setChecked(newIds);
        }}
      />
      <Texting
        marginTop={-3}
        marginLeft={-15}
        text={title}
        colors={COLORS.light02}
        lineHeight={24.55}
        fontSize={18}
      />
    </View>
  );
};

export default Checking;
