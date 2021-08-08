import * as React from 'react';
import { Text, Image } from 'react-native';
import {
  Content,
  Container,
  ContainerImage,
  ContainerInfo,
  TitleInfo,
  TextInfo
} from './styles';
import SvgUri from 'react-native-svg-uri'; // SVG Package






const typeColorPokemon = (type) => {
  switch (type) {
    case 'rock':
        return rgb(247, 247, 247)
      break;
      case 'ghost':
        return  rgb(247, 247, 247)
      break;
      case 'electric':
        return rgb(255, 255, 161)
      break;
      case 'bug':
        return '#F6D6A7'
      break;
      case 'poison':
        return '#e0a7f6'
      break;
      case 'normel':
        return '#f4f4f4'
      break;
      case 'fairy':
        return rgba(255, 192, 203, 0.863)
      break;
      case 'fire':
        return '#FBE3DF'
      break;
      case 'grass':
        return '#E2F9E1'
      break;
      case 'water':
        return  '#E0F1FD'
      break;
    default:
      break;
  }
}


const Card = ({ item, onSelected }) => {
  const image = item.sprites.other.dream_world.front_default;
  const type = item.types[0].type.name;
  const colorsTypes = typeColorPokemon(item.types[0].type.name);
  return (
    <Container onPress={() => onSelected(item)}>
      <Content bgColor={colorsTypes}>
        <ContainerImage>
        <SvgUri
          width="100px"
          height="100px"
          source={{  uri: image}}
          style={{ padding:5 }}
        />
        </ContainerImage>
        <ContainerInfo>
          <TitleInfo>#{item.id} - {item.name}</TitleInfo>
          <TextInfo>Tipo:{type}</TextInfo>
        </ContainerInfo>
      </Content>
    </Container>
  );
};

export default Card;
