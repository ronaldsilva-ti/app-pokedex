import { useState } from 'react'
import axios from 'axios';


const INITIAL_REQUEST_INFO = {
  error:null,
  data:[],
  loading:null
}

const usePokeApi = (config) => {
  const [requestInfo, setRequestInfo] = useState(INITIAL_REQUEST_INFO);
 async function call() {
  let pokemons = [];

    setRequestInfo({
      ...INITIAL_REQUEST_INFO,
      loading:true
    });




    try {
      const { data } = await axios(config);
      const { results } = data;

      const search = [{
        name: config.params.name
      }];

      const query = config.params.name !== undefined ? search : results;

      return Promise.all(query.map(async pokemon => {
        const result = await fetchPokemon(pokemon);
        pokemons.push(result);
      })).then(() => {

        setRequestInfo({
          ...INITIAL_REQUEST_INFO,
          loading:false,
          data:[pokemons]
        })

        if(config.onCompleted){
          config.onCompleted(pokemons)
        }

      });
    } catch (error) {
      setRequestInfo({
        ...INITIAL_REQUEST_INFO,
        loading:false,
        error:true
      })
    }
  }
  async function fetchPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        return await response.json();
    } catch (e) {
        throw new Error(`fetching ${pokemon.name}'s details went wrong`);
    }
  };


  return[
    call,
    requestInfo
  ]
}


export default usePokeApi;
