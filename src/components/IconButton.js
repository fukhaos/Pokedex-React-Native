import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import generation from 'app/images/generation.png';
import { Icon } from 'app/styles';

const IconButton = ({ icon, onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon disabled={disabled} source={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
