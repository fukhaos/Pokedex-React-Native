import React from 'react';
import { StyleSheet } from 'react-native';
import { StatTitle, StatValue, StatContainer } from 'app/styles';
import ProgressBar from './ProgressBar';
import colors from 'app/styles/colors';

const minMaxStats = [
  { title: 'HP', min: 200, max: 294 },
  { title: 'Attack', min: 92, max: 216 },
  { title: 'Defense', min: 92, max: 216 },
  { title: 'Sp. Atk', min: 121, max: 251 },
  { title: 'Sp. Def', min: 121, max: 251 },
  { title: 'Speed', min: 85, max: 207 },
];

const Stats = ({ item, index = 0, color }) => {
  const { base_stat } = item;

  const { title, max, min } = minMaxStats[index];

  return (
    <StatContainer>
      <StatTitle>{title}</StatTitle>
      <StatValue>{base_stat}</StatValue>

      <ProgressBar
        initialProgress={base_stat / 100}
        progress={base_stat / 100}
        backgroundStyle={styles.backgroundStyle}
        fillStyle={[styles.fillStyle, { backgroundColor: color }]}
        style={styles.progress}
      />
      <StatValue>{min}</StatValue>
      <StatValue>{max}</StatValue>
    </StatContainer>
  );
};

const styles = StyleSheet.create({
  progress: {
    alignSelf: 'center',
    marginVertical: 16,
    marginHorizontal: 10,
    flex: 1,
    height: 4,
  },
  fillStyle: {
    backgroundColor: colors.typeBug,
    borderRadius: 2,
    height: 4,
  },
  backgroundStyle: {
    backgroundColor: colors.white,
    borderRadius: 2,
    height: 4,
  },
});

export default Stats;
