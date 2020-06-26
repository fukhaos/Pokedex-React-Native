import React, { useState, useEffect, useRef } from 'react';
import { FlatList, Button, Image, View } from 'react-native';
import BaseScreen from 'app/components/BaseScreen';
import SearchInput from 'app/components/SearchInput';
import { Description, Header, Title, ListPokemon, Loading, IconsRow, SubTitle } from 'app/styles';
import RowPokemon from 'app/components/RowPokemon';
import { useSelector, useDispatch } from 'react-redux';
import * as PokemonAction from 'app/store/modules/pokemon/actions';
import IconButton from 'app/components/IconButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import generation from 'app/images/generation.png';
import filter from 'app/images/filter.png';
import sort from 'app/images/sort.png';
import colors from 'app/styles/colors';
import SortSheet from 'app/components/SortSheet';

const HomeScreen = () => {
  const ITEM_HEIGHT = 120;
  const dispatch = useDispatch();
  const { pokemons, loading, end } = useSelector((state) => state.pokemon);
  const refRBSheet = useRef();

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

  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const renderFooter = () => {
    return <Loading />;
  };

  const renderItem = ({ item, index }) => <RowPokemon index={index} item={item} />;
  const header = () => (
    <Header>
      <IconsRow>
        <IconButton icon={generation} disabled />
        <IconButton icon={sort} onPress={() => refRBSheet.current.open()} />
        <IconButton icon={filter} disabled />
      </IconsRow>
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
        getItemLayout={getItemLayout}
      />
      <SortSheet refInside={refRBSheet} />
    </BaseScreen>
  );
};

export default HomeScreen;
