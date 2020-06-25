import React, { useState, useEffect } from 'react';
import { FlatList, Button, Image } from 'react-native';
import BaseScreen from 'app/components/BaseScreen';
import SearchInput from 'app/components/SearchInput';
import { Description, Header, Title, ListPokemon } from 'app/styles';
import RowPokemon from 'app/components/RowPokemon';
import { useSelector, useDispatch } from 'react-redux';
import * as PokemonAction from 'app/store/modules/pokemon/actions';

const HomeScreen = () => {
  const ITEM_HEIGHT = 115;
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    PokemonAction.pokemonListRequest();
  }, []);

  const renderItem = ({ item, index }) => <RowPokemon index={index} item={item} />;
  const header = () => (
    <Header>
      {/* <Button
        title="ADD"
        onPress={() => {
          dispatch(PokemonAction.pokemonListRequest());
        }}></Button> */}
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <SearchInput></SearchInput>
    </Header>
  );
  return (
    <BaseScreen>
      <ListPokemon
        keyExtractor={(item) => `poke${item.id}`}
        data={pokemons}
        renderItem={renderItem}
        ListHeaderComponent={header}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </BaseScreen>
  );
};

export default HomeScreen;
