import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, ContainerTitle } from './styles';

const Wrapper = ({ title, children }) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
      {children}
    </Container>
  );
};

Wrapper.defaultProps = {
  title: '',
  children: null,
};

Wrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
