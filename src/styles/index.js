import styled from 'styled-components/native';
import colors from './colors';

export const Screen = styled.View`
  background-color: ${(props) => (props.color ? `${props.color}90` : colors.backgroundWhite)};
  flex: 1;
`;
export const ImageScreen = styled.Image`
  height: 200px;
  position: absolute;
`;
export const ImageDetailScreen = styled.Image`
  margin-top: 100px;
  margin-left: 30px;
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
  height: 100%;
  width: 100%;
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

export const PokeNumberDetail = styled(PokeNumber)`
  font-size: 14px;
`;

export const Badges = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
export const DetailContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal: 40px;
  padding-top: 40px;
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

export const PokeNameDetail = styled(PokeName)`
  font-size: 32px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  color: ${colors.textGray};
`;

export const HeaderDetail = styled.View`
  height: 50px;
  z-index: 99;
  justify-content: center;
  padding-left: 40px;
  position: absolute;
`;

export const ScrollViewDetail = styled.ScrollView`
  flex: 1;
`;

export const TitlePokemon = styled.Text`
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  align-self: center;
  margin-top: 10px;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: ${colors.backgroundWhite};
`;

export const Menu = styled.View`
  height: 40px;
  margin-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const MenuItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  color: ${colors.backgroundWhite};
`;

export const BottomBackground = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.backgroundWhite};
  padding-horizontal: 40px;
  padding-vertical: 30px;
  flex: 1;
  bottom: 0;
`;

export const BaseStats = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0px;
  margin-bottom: 20px;
  color: ${(props) => (props.color ? props.color : colors.textBlack)};
`;

export const Info = styled.Text`
  font-size: 11px;
  font-style: normal;
  letter-spacing: 0px;
  margin-top: 20px;
  font-family: 'sans_serif_thin, System';
  color: ${colors.textGray};
`;

export const StatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export const StatTitle = styled.Text`
  width: 52px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  text-transform: capitalize;
  color: ${colors.textBlack};
`;

export const StatValue = styled.Text`
  min-width: 40px;
  text-align: right;
  font-size: 16px;
  color: ${colors.textGray};
`;

export const StatValueBold = styled(StatValue)`
  font-weight: bold;
  font-size: 12px;
  color: ${colors.textBlack};
`;
