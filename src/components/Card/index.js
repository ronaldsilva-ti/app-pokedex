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
import pokemonColorByType from '../../utils/functions/pokemonColorByType'

const Card = ({ item, onSelected }) => {
  const image = item.sprites.other.dream_world.front_default;
  const type = item.types[0].type.name;
  const colorsTypes = pokemonColorByType(item.types[0].type.name);
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
