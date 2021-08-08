import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { openModalAction, closeModalAction } from '../../store/ducks/modal';
import { Modalize } from 'react-native-modalize';
import { Header, ButtonCloseModal, Content,Body,ContainerImage, ContainerInfo, InfoName, InfoValue,Row} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import pokemonColorByType from '../../utils/functions/pokemonColorByType'
import SvgUri from 'react-native-svg-uri'; // SVG Package

export const ModalizeComponent = () => {
  const { openModal, contentModal } = useSelector((state) => state.modal);
  const modalizeRef = useRef(null);
  const dispatch = useDispatch();
  console.log('contentModal',contentModal)

  useEffect(() => {
    if (openModal) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [openModal]);

  const onOpen = () => dispatch(openModalAction());

  const onClose = () => dispatch(closeModalAction());

  const colorByType = contentModal?.types[0]?.type?.name;
  const type = contentModal?.types[0]?.type?.name
  const image = contentModal?.sprites?.other?.dream_world?.front_default;



  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={600}
        modalHeight={650}
        modalStyle={{
          backgroundColor:pokemonColorByType(colorByType)
        }}
      >
        <Content>
          <Header>
            <ButtonCloseModal onPress={onClose}>
              <AntDesign name="closesquareo" size={30} />
            </ButtonCloseModal>
          </Header>

          <Body>
            <ContainerImage>
              <SvgUri
                width="220px"
                height="220px"
                source={{  uri: image }}
                style={{ padding:5 }}
              />
            </ContainerImage>
            <ContainerInfo>
             <Row justifyContent="center">
                <Image style={{ width:90, height:90 }} source={{ uri:contentModal?.sprites.back_default }} />
                <Image style={{ width:90, height:90 }} source={{ uri:contentModal?.sprites.front_default }} />
                <Image style={{ width:90, height:90 }} source={{ uri:contentModal?.sprites.front_shiny }} />
                <Image style={{ width:90, height:90 }} source={{ uri:contentModal?.sprites.back_shiny }} />
              </Row>
              <Row>
                <InfoName>ID:</InfoName>
                <InfoValue>#{contentModal?.id}</InfoValue>
              </Row>
              <Row>
                <InfoName>Pokémon:</InfoName>
                <InfoValue>{contentModal?.name}</InfoValue>
              </Row>
              <Row>
                <InfoName>Tipo:</InfoName>
                <InfoValue>{type}</InfoValue>
              </Row>

            </ContainerInfo>
         </Body>

        </Content>
      </Modalize>
    </>
  );
};
