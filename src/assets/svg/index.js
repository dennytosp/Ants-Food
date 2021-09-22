import React from 'react';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
  Line,
  ClipPath,
  Pattern,
  Use,
  Image,
  Mask,
  Ellipse,
} from 'react-native-svg';

export const Bling = ({width = 25, height = 24}) => {
  return (
    <Svg
      width="375"
      height="241"
      viewBox="0 0 375 241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M534 -109C534 84.2997 377.3 241 184 241C-9.29967 241 -166 84.2997 -166 -109C-166 -302.3 -9.29967 -459 184 -459C377.3 -459 534 -302.3 534 -109Z"
        fill="#3B5998"
      />
    </Svg>
  );
};

export const Facebook = ({width = 25, height = 24}) => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
        fill="#3B5998"
      />
      <Path
        d="M25.028 20.783H21.4592V33.8573H16.0523V20.783H13.4807V16.1882H16.0523V13.2148C16.0523 11.0886 17.0623 7.75903 21.5074 7.75903L25.5125 7.77579V12.2358H22.6065C22.1298 12.2358 21.4596 12.474 21.4596 13.4883V16.1925H25.5004L25.028 20.783Z"
        fill="white"
      />
    </Svg>
  );
};
export const Google = ({width = 25, height = 24}) => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40ZM27.1383 18.5717H30.0017V15.71H32.865V18.5733H35.7033V21.4367H32.865V24.3H30.0017V21.4367H27.1383V18.5717ZM20.9933 12.6033L18.2833 15.2333C14.8167 11.845 8.07167 14.3133 8.07167 19.9917C8.07167 27.6933 19.0033 28.22 19.9517 21.9917H14.2983V18.5567H23.7267C24.7967 24.15 21.185 30 14.2983 30V30.0017C8.75 30.0017 4.29667 25.525 4.29667 20C4.29833 11.1033 14.8517 6.89833 20.9933 12.6033Z"
        fill="#F44336"
      />
    </Svg>
  );
};
