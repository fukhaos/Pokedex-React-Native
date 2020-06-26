import styled from 'styled-components/native';
import colors from './colors';

export const Screen = styled.View`
  background-color: ${colors.backgroundWhite};
  flex: 1;
`;
export const ImageScreen = styled.Image`
  height: 200px;
  position: absolute;
`;

export const Dots = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 30%;
  top: 10px;
`;

export const ListPokemon = styled.FlatList`
  padding-horizontal: 40px;
`;

export const PokemonRow = styled.Image`
  position: absolute;
  width: 36%;
  height: 100%;
  resize-mode: contain;
  right: 10px;
  bottom: 20px;
`;

export const PokeDetail = styled.Image`
  position: absolute;
  resize-mode: contain;
  width: 38%;
  height: 100%;
  right: 0px;
`;

export const Header = styled.View`
  padding-top: 10px;
`;
export const FlatListPokemon = styled.FlatList`
  flex: 1;
`;

export const BaseRow = styled.View`
  height: 115px;
  background: ${(props) => props.primary};
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0px 4px 4px ${(props) => `${props.primary}70`};
`;

export const BaseRowFade = styled.View`
  padding: 20px;
  height: 115px;

  background: ${colors.fade};
  border-radius: 10px;
`;

export const Search = styled.View`
  height: 60px;
  left: 0px;
  top: 0px;
  flex-direction: row;
  padding-left: 27px;
  margin-top: 25px;
  margin-bottom: 15px;
  align-items: center;
  background: ${colors.backgroundDefaultInput};
  border-radius: 10px;
`;

export const InputSearch = styled.TextInput`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: ${colors.textBlack};
`;

export const Background = styled.TouchableOpacity`
  height: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? colors.typePsychic : colors.backgroundDefaultInput};
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.selected ? colors.backgroundWhite : colors.textGray)};
`;

export const SubTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0px;
  color: ${colors.textBlack};
`;

export const PokeNumber = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.textNumber};
`;

export const Badges = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const IconsRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Badge = styled.Image`
  width: 61px;
  height: 25px;
  resize-mode: contain;
  margin-right: 10px;
`;

export const Icon = styled.Image`
  margin-right: 10px;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export const PokeName = styled.Text`
  margin-top: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: ${colors.white};
  text-transform: capitalize;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  color: ${colors.textGray};
`;
