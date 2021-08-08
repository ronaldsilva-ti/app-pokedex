
import { pokeListAction,pokeListActionSuccess,pokeListActionError } from '../ducks/pokedex';
export function fetchAll() {
  return async (dispatch) => {
    let pokemons = [];

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`);
        const json = await response.json();
        const arr = json.results;
        return Promise.all(arr.map(async pokemon => {
            const result = await fetchPokemon(pokemon);
            pokemons.push(result);
        })).then(() => {
            dispatch(pokeListActionSuccess(pokemons))
        });
    } catch (e) {
        dispatch(pokeListActionError())
    };
  }
};

async function fetchPokemon(pokemon) {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      return await response.json();
  } catch (e) {
      throw new Error(`fetching ${pokemon.name}'s details went wrong`);
  }
};
