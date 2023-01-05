import React, { useState, useEffect } from 'react';
import { GenericJSON } from '../../types/GenericJSON';
import PokemonListItem from './PokemonListItem';

import { Container } from './styles';

type PokemonAPI = {
  name: string;
  url: string;
}

type Pokemon = {
  nome: string;
  imagem: string;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {

    const dataPokemonLocal = JSON.parse(localStorage.getItem("pokemonList") as string) || null;

    if (dataPokemonLocal === null) {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151", {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.text())
        .then(
          result => {
            localStorage.setItem('pokemonList', JSON.stringify(JSON.parse(result).results))
          }
        )
        .catch(error => console.log('error', error));
    }

    if (dataPokemonLocal !== null) {
      setPokemons(dataPokemonLocal.map((element: PokemonAPI, index: number) => {
        return {
          nome: element.name,
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index+1)}.png`
        }
      }));
    }

  }, []);

  return (
    <Container>
      {
        pokemons.map((pokemon, index) =>
          <PokemonListItem key={index} nome={pokemon.nome} imagem={pokemon.imagem} />
        )
      }
    </Container>
  );
}

export default PokemonList;