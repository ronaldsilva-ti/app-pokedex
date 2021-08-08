import * as React from 'react';
import { Text, Image } from 'react-native';
import {
  Content,
  Container,
  ContainerImage,
  ContainerInfo,
  TitleInfo,
} from './styles';

const Card = ({ item, onSelected }) => {
  return (
    <Container onPress={() => onSelected(item)}>
      <Content>
        <ContainerImage>
          <Image
            source={{
              uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            }}
            style={{ width: 120, height: 120 }}
          />
        </ContainerImage>
        <ContainerInfo>
          <TitleInfo>Bullbasar</TitleInfo>
        </ContainerInfo>
      </Content>
    </Container>
  );
};

export default Card;
