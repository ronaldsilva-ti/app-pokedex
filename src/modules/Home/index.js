import React, { useState } from 'react';
import { View, FlatList, Text, ScrollView, Modal } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import { SearchBar, ContainerList } from './styles';

const App = () => {
  const [isSearch, setIsSearch] = useState('');
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
  const onChangeSearch = (query) => setIsSearch(query);
  const onSelectedItem = (selected) => console.log(selected);

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
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
          />
        </ContainerList>
      </ScrollView>
    </Wrapper>
  );
};

export default App;
