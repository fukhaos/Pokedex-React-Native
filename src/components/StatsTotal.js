import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatTitle, StatValue, StatContainer, StatValueBold } from 'app/styles';
import ProgressBar from './ProgressBar';
import colors from 'app/styles/colors';

const StatsTotal = () => {
  return (
    <StatContainer>
      <StatTitle>Total</StatTitle>
      <StatValue>{318}</StatValue>

      <View style={styles.progress} />
      <StatValueBold>Min</StatValueBold>
      <StatValueBold>Max</StatValueBold>
    </StatContainer>
  );
};

const styles = StyleSheet.create({
  progress: {
    flex: 1,
  },
});

export default StatsTotal;
