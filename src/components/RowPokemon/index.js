import React from 'react';
import { View } from 'react-native';
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
import poke_detail from 'app/images/poke_detail.png';
import PokemonTypes from 'app/utils/pokemon_types';
import { Image } from 'react-native-expo-image-cache';
import styles from './styles';

const RowPokemon = ({ item }) => {
  const { id, name, types } = item;
  const mainName = types[0]?.type?.name || 'normal';
  const mainType = PokemonTypes[mainName];

  console.log('render: ' + item.id);
  return (
    <View>
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
        {/* should use FastImage for performance/cache (not Expo version)  */}
        <Image
          resizeMode="contain"
          style={styles.pokemon}
          uri={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
      </BaseRow>
    </View>
  );
};

export default RowPokemon;
