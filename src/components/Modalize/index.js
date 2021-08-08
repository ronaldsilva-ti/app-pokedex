/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Header, ButtonCloseModal } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ModalizeComponent = () => {
  const modalizeRef = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  function onClose() {
    modalizeRef.current?.close();
  }

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text style={{ color: 'white' }}>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} snapPoint={600} modalHeight={650}>
        <Header>
          <ButtonCloseModal onPress={onClose}>
            <AntDesign name="closesquareo" size={30} />
          </ButtonCloseModal>
        </Header>
      </Modalize>
    </>
  );
};
