import React from 'react';
import { Background, Label } from 'app/styles';

const ButtonSelect = ({ title, selected, index, onPress }) => {
  return (
    <Background selected={selected} onPress={onPress}>
      <Label selected={selected}>{title}</Label>
    </Background>
  );
};

export default ButtonSelect;
