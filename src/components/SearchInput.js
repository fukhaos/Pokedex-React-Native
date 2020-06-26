import React, { useState } from 'react';
import { Image } from 'react-native';
import { Search, InputSearch } from 'app/styles';
import searchImg from 'app/images/search.png';
import { flashError } from 'app/utils';
import api from 'app/services/api';
import { useNavigation } from '@react-navigation/native';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const searchPokemon = async () => {
    try {
      //TODO look in saved pokemon to avoid unnecessary request
      const { data: pokemon } = await api.get(`/pokemon/${search.toLowerCase()}`);
      navigation.navigate('Detail', { pokemon });
    } catch (error) {
      flashError(error.response.data);
    }
  };
  return (
    <Search>
      <Image source={searchImg} />

      <InputSearch
        returnKeyType="search"
        onSubmitEditing={() => searchPokemon()}
        onChangeText={setSearch}
        value={search}
        placeholder="What Pokémon are you looking for?"
      />
    </Search>
  );
};

export default SearchInput;
