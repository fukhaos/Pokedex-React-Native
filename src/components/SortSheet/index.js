import React, { useState } from 'react';
import styles from './styles';
import { Header, SubTitle, Description } from 'app/styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import ButtonSelect from '../ButtonSelect';

const SortSheet = ({ refInside }) => {
  const [selected, setSelected] = useState(0);
  const options = ['Smallest number first', 'Highest number first', 'A-Z', 'Z-A'];
  return (
    <RBSheet ref={refInside} closeOnDragDown={true} height={480} customStyles={styles}>
      <Header>
        <SubTitle>Sort</SubTitle>
        <Description>Sort Pokémons alphabetically or by National Pokédex number!</Description>

        {options.map((item, index) => (
          <ButtonSelect
            onPress={() => setSelected(index)}
            selected={index === selected}
            title={item}
            index={index}
          />
        ))}
      </Header>
    </RBSheet>
  );
};

export default SortSheet;
