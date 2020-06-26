import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Screen, ImageScreen } from 'app/styles';
import pokeball from 'app/images/pokeball.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'app/styles/colors';

const BaseScreen = ({ children }) => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.backgroundWhite} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ImageScreen source={pokeball} />
        {children}
      </SafeAreaView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BaseScreen;
