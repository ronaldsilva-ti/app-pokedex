import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ScrollView, Modal } from 'react-native';
import { openModalAction, closeModalAction } from '../../store/ducks/modal'
import { fetchAll } from '../../store/fetchActions/pokedexFetchActions';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import { ModalizeComponent } from '../../components/Modalize';
import { SearchBar, ContainerList } from './styles';
import usePokeApi from '../../utils/hooks/usePokeApi';

const App = () => {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState('');
  const [pokemon, setPokemons] = useState([])

  const [load, loadInfo] = usePokeApi({
    url:'https://pokeapi.co/api/v2/pokemon/',
    method:'get',
    params:{
      offset:'0',
      limit:'10',
      name: isSearch || undefined
    },
    onCompleted:(response) => {
      setPokemons(response)
    }
  });

  useEffect(() => {
    load()
  },[isSearch])


  const numColumns = '2';
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const onChangeSearch = (query) => setIsSearch(query.toLowerCase());
  const onSelectedItem = (selected) => dispatch(openModalAction());

  const renderItem = ({ item }) => {
    return <Card item={item} onSelected={onSelectedItem} />;
  };

  return (
    <Wrapper title="Pokédex">
      <SearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={isSearch}
      />
      <ScrollView>
        <ContainerList>
          <FlatList
            data={pokemon}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
          />
        </ContainerList>
      </ScrollView>
      <ModalizeComponent />
    </Wrapper>
  );
};

export default App;
