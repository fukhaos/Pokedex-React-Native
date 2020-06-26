import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  BaseRow,
  BaseRowFade,
  Dots,
  PokeDetail,
  PokeNumber,
  PokeName,
  Badges,
  Badge,
} from 'app/styles';
import dots from 'app/images/dots.png';
import TouchableScale from 'react-native-touchable-scale';
import poke_detail from 'app/images/poke_detail.png';
import PokemonTypes from 'app/utils/pokemon_types';
import { Image } from 'react-native-expo-image-cache';

const RowPokemon = ({ item, onPress }) => {
  const { id, name, types } = item;
  const mainName = types[0]?.type?.name || 'normal';
  const mainType = PokemonTypes[mainName];
  return (
    <TouchableScale onPress={onPress}>
      <BaseRow primary={mainType.color}>
        <BaseRowFade>
          <PokeNumber>{`#${('000' + id).substr(-3)}`}</PokeNumber>
          <PokeName>{`${name}`}</PokeName>
          <Badges>
            {types.map((t) => {
              const { badge } = PokemonTypes[t.type.name];
              return <Badge source={badge} />;
            })}
          </Badges>
        </BaseRowFade>
        <Dots source={dots} />
        <PokeDetail source={poke_detail} />
        {/* should used FastImage for performance/cache (not Expo version)  */}
        <Image
          resizeMode="contain"
          style={styles.pokemon}
          uri={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
      </BaseRow>
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  pokemon: {
    position: 'absolute',
    width: '36%',
    height: '100%',
    right: 10,
    bottom: 20,
  },
});

export default RowPokemon;
