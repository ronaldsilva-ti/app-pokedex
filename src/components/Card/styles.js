import styled from 'styled-components/native';



export const Content = styled.View`
  width: 180px;
  height: 180px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  margin: 6px;
`;
export const Container = styled.TouchableOpacity``;
export const ContainerImage = styled.View`
  align-items: center;
`;
export const ContainerInfo = styled.View`
  align-items: center;
`;
export const TitleInfo = styled.Text`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding:5px;
`;
