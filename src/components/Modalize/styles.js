import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 5px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Content = styled.View``;
export const Body = styled.View``;
export const ContainerImage = styled.View`
  align-items:center;
`;

export const ContainerInfo = styled.View`
  /* padding:60px; */
  margin:0px 10px 0 0px;
  /* padding:20px; */

`;

export const InfoName = styled.Text`
font-weight:bold;
text-transform:uppercase;


`;
export const InfoValue = styled.Text`
font-weight:bold;
text-transform:uppercase;


`;
export const Row = styled.View`
  flex-direction:row;
  justify-content:${props => props.justifyContent ? props.justifyContent : "flex-start"  };
  padding:5px;
`;
