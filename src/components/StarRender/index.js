import React from 'react';
import {Pressable, View} from 'react-native';
import {StarReviews} from '../../assets/svg';
import styles from './styles';

const StarRender = ({starLight, style}) => {
  return (
      <Pressable style={styles.star}>
        <StarReviews />
      </Pressable>
  );
};

export default StarRender;
