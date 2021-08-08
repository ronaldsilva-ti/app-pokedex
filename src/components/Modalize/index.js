import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { openModalAction, closeModalAction } from '../../store/ducks/modal';
import { Modalize } from 'react-native-modalize';
import { Header, ButtonCloseModal, Content } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';

export const ModalizeComponent = () => {
  const { openModal } = useSelector((state) => state.modal);
  const modalizeRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openModal) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [openModal]);

  const onOpen = () => dispatch(openModalAction());

  const onClose = () => dispatch(closeModalAction());

  return (
    <>
      {/* <TouchableOpacity onPress={onOpen}>
        <Text style={{ color: 'white' }}>Open the modal</Text>
      </TouchableOpacity> */}

      <Modalize ref={modalizeRef} snapPoint={600} modalHeight={650}>
        <Content>
          <Header>
            <ButtonCloseModal onPress={onClose}>
              <AntDesign name="closesquareo" size={30} />
            </ButtonCloseModal>
          </Header>
        </Content>
      </Modalize>
    </>
  );
};
