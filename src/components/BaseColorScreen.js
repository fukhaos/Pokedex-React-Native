import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Screen, ImageDetailScreen } from 'app/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import detailBackground from 'app/images/detailBackground.png';
import Svg, { Text } from 'react-native-svg';
const { width: cardWidth } = Dimensions.get('screen');

const BaseColorScreen = ({ children, color, pokemon }) => {
  return (
    <Screen color={color}>
      <StatusBar barStyle="light-content" backgroundColor={`${color}90`} />
      <SafeAreaView style={styles.container}>
        <ImageDetailScreen source={detailBackground} />
        <Svg height="200" width={cardWidth} style={styles.name}>
          <Text
            fill="transparent"
            strokeWidth="2.5"
            stroke="#FFFFFF"
            strokeOpacity="0.2"
            fontSize="100"
            fontWeight="bold"
            x={cardWidth / 2}
            y="100"
            textAnchor="middle">
            {pokemon.name.toUpperCase()}
          </Text>
        </Svg>

        {children}
      </SafeAreaView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: { position: 'absolute', marginTop: 30 },
});

export default BaseColorScreen;
