import React from 'react';
import styles from './styles';
import { Header, SubTitle, Description } from 'app/styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import ButtonSelect from '../ButtonSelect';
import { useDispatch, useSelector } from 'react-redux';
import * as PokemonAction from 'app/store/modules/pokemon/actions';

const SortSheet = ({ refInside }) => {
  const dispatch = useDispatch();
  const { sortOrder } = useSelector((state) => state.pokemon);
  const options = ['Smallest number first', 'Highest number first', 'A-Z', 'Z-A'];
  return (
    <RBSheet ref={refInside} closeOnDragDown={true} height={480} customStyles={styles}>
      <Header>
        <SubTitle>Sort</SubTitle>
        <Description>Sort Pokémons alphabetically or by National Pokédex number!</Description>

        {options.map((item, index) => (
          <ButtonSelect
            onPress={() => {
              //refInside.current.close();
              dispatch(PokemonAction.updateSortOrder(index));
            }}
            selected={index === sortOrder}
            title={item}
            index={index}
          />
        ))}
      </Header>
    </RBSheet>
  );
};

export default SortSheet;
