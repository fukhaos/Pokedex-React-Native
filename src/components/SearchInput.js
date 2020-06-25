import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Search, InputSearch } from 'app/styles';
import search from 'app/images/search.png';

const SearchInput = () => {
  return (
    <Search>
      <Image source={search}></Image>
      <InputSearch placeholder="What Pokémon are you looking for?" />
    </Search>
  );
};

export default SearchInput;
