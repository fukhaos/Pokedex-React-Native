/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { View, Dimensions } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

/**
 * @author Vinicius Oliveira
 * @param {*} props
 * receive the background color
 */

const BottomFix = ({ backgroundColor }) => {
  const { width } = Dimensions.get('screen');
  const safeAreaInsets = useSafeArea();

  return (
    <View
      style={{
        backgroundColor: backgroundColor || 'white',
        position: 'absolute',
        width: width,
        bottom: 0,
        height: safeAreaInsets.bottom,
      }}
    />
  );
};

export default BottomFix;
