import React, { useState, useEffect } from 'react';
import { GenericJSON } from '../../types/GenericJSON';
import PokemonListItem from './PokemonListItem';

import { Container, FilterField, PokemonNotFound } from './styles';

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
  const [filter, setFilter] = useState<string>('');
  const [showValidation, setShowValidation] = useState<boolean>(false)

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
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index + 1)}.png`
        }
      }));
    }
  }, []);

  useEffect(() => {
    const dataPokemonLocal = JSON.parse(localStorage.getItem("pokemonList") as string) || null;

    if (filter.length >= 3) {

      if (dataPokemonLocal !== null) {

        const auxPokemonsArr: Pokemon[] = dataPokemonLocal.map((element: PokemonAPI, index: number) => {
          return {
            nome: element.name,
            imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index + 1)}.png`
          };
        }).filter((element: Pokemon) => {
          return element.nome.toLowerCase().includes(filter.toLowerCase());
        });

        setPokemons(auxPokemonsArr);

      }

    } else {

      if (dataPokemonLocal !== null) {
        setPokemons(dataPokemonLocal.map((element: PokemonAPI, index: number) => {
          return {
            nome: element.name,
            imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index + 1)}.png`
          }
        }));
      }

    }


  }, [filter])

  const inputSearchValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowValidation(!(event.target.value.length >= 3));
  }

  return (
    <>
      <FilterField>
        <input
          value={filter}
          onChange={event => {
            setFilter(event.target.value);
            inputSearchValidate(event)
          }}
          onBlur={event => {
            if (event.target.value.length === 0)
              setShowValidation(false);
          }}
          placeholder='Digite o nome do seu pokemon...'
        />
        {
          showValidation &&
          <p>Digite ao menos 3 caracteres</p>
        }
      </FilterField>
      <Container>
        {
          pokemons.length > 0 ?
            pokemons.map((pokemon, index) =>
              <PokemonListItem key={index} nome={pokemon.nome} imagem={pokemon.imagem} />
            ) :
            <PokemonNotFound>
              <h1>Ops... Não encontramos nenhum pokemon com esse nome.</h1>
            </PokemonNotFound>
        }
      </Container>
    </>
  );
}

export default PokemonList;