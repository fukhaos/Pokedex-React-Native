import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import BaseColorScreen from 'app/components/BaseColorScreen';
import PokemonTypes from 'app/utils/pokemon_types';
import {
  Badges,
  Badge,
  DetailContainer,
  PokeNumberDetail,
  PokeNameDetail,
  HeaderDetail,
  ScrollViewDetail,
  MenuItem,
  Menu,
  TitlePokemon,
  BottomBackground,
  BaseStats,
  Info,
  Stat,
} from 'app/styles';

import { Image as ImageCache } from 'react-native-expo-image-cache';
import TouchableScale from 'react-native-touchable-scale';
import back from 'app/images/back.png';

import { useSafeArea } from 'react-native-safe-area-context';
import Stats from 'app/components/Stats';
import StatsTotal from 'app/components/StatsTotal';
import BottomFix from 'app/components/BottomFix';

const DetailScreen = ({ navigation, route }) => {
  const { pokemon } = route.params;
  const { id, name, types } = pokemon;
  const mainName = types[0]?.type?.name || 'normal';
  const mainType = PokemonTypes[mainName];

  const goBack = () => navigation.goBack();
  const insets = useSafeArea();

  return (
    <BaseColorScreen pokemon={pokemon} color={mainType.color}>
      <HeaderDetail top={insets.top}>
        <TouchableScale onPress={goBack}>
          <Image source={back} />
        </TouchableScale>
        {/* <TitlePokemon>{name}</TitlePokemon> */}
      </HeaderDetail>

      <ScrollViewDetail contentContainerStyle={styles.contentContainerStyle}>
        <DetailContainer>
          <ImageCache
            resizeMode="contain"
            style={styles.pokemon}
            uri={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          />

          <View>
            <PokeNumberDetail>{`#${('000' + id).substr(-3)}`}</PokeNumberDetail>
            <PokeNameDetail>{`${name}`}</PokeNameDetail>
            <Badges>
              {types.map((t) => {
                const { badge } = PokemonTypes[t.type.name];
                return <Badge source={badge} />;
              })}
            </Badges>
          </View>
        </DetailContainer>

        <Menu>
          <MenuItem disabled>About</MenuItem>
          <MenuItem>Stats</MenuItem>
          <MenuItem disabled>Evolution</MenuItem>
        </Menu>

        <BottomBackground>
          <BaseStats color={mainType.color}>Base Stats</BaseStats>

          {pokemon.stats.map((item, index) => (
            <Stats color={mainType.color} item={item} index={index} />
          ))}
          <StatsTotal />

          <Info>
            The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a
            beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0
            EVs, 0 IVs.
          </Info>
        </BottomBackground>
      </ScrollViewDetail>
      <BottomFix />
    </BaseColorScreen>
  );
};

const styles = StyleSheet.create({
  pokemon: {
    width: 120,
    height: 120,
    marginRight: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default DetailScreen;
