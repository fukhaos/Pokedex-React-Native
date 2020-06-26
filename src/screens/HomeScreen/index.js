import React, { useState, useEffect } from 'react';
import { FlatList, Button, Image } from 'react-native';
import BaseScreen from 'app/components/BaseScreen';
import SearchInput from 'app/components/SearchInput';
import { Description, Header, Title, ListPokemon, Loading } from 'app/styles';
import RowPokemon from 'app/components/RowPokemon';
import { useSelector, useDispatch } from 'react-redux';
import * as PokemonAction from 'app/store/modules/pokemon/actions';

const HomeScreen = () => {
  const ITEM_HEIGHT = 115;
  const dispatch = useDispatch();
  const { pokemons, loading, end } = useSelector((state) => state.pokemon);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(PokemonAction.pokemonListRequest());
    }
  }, [dispatch, pokemons]);

  const handleLoadMore = () => {
    if (!end && !loading) {
      dispatch(PokemonAction.pokemonListRequest());
    }
  };

  const renderFooter = () => {
    return <Loading />;
  };

  const renderItem = ({ item, index }) => <RowPokemon index={index} item={item} />;
  const header = () => (
    <Header>
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <SearchInput />
    </Header>
  );
  return (
    <BaseScreen>
      <ListPokemon
        keyExtractor={(item) => `poke${item.id}`}
        data={pokemons}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
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
