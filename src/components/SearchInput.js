import React, { useState } from 'react';
import { Image } from 'react-native';
import { Search, InputSearch } from 'app/styles';
import searchImg from 'app/images/search.png';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <Search>
      <Image source={searchImg} />

      <InputSearch
        returnKeyType="search"
        onSubmitEditing={() => alert(search)}
        onChangeText={setSearch}
        value={search}
        placeholder="What Pokémon are you looking for?"
      />
    </Search>
  );
};

export default SearchInput;
