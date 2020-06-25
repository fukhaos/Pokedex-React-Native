import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native';
import { Screen, ImageScreen } from 'app/styles';
import pokeball from 'app/images/pokeball.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const BaseScreen = ({ children }) => {
  return (
    <Screen>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageScreen source={pokeball}></ImageScreen>
        {children}
      </SafeAreaView>
    </Screen>
  );
};

export default BaseScreen;
