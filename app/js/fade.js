import React, { PropTypes } from 'react';
import { View } from 'react-native';

const Fade = (props) => (
  <View
    className={`fade ${props.visible && 'active'}`}
  />
);

Fade.propTypes = {
  visible: PropTypes.bool,
};

Fade.defaultProps = {
  visible: true,
};

export default Fade;
