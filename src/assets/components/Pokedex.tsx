import { FormEvent, useState } from 'react'
import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage';

interface PokemonData {
    name: string;
    sprites: {
        front_default: string;
    };
}

const Pokedex = () => {

    const [pokemon , setPokemon] = useState<string>("");
    const [choosedPokemon , setChoosedPokemon ] = useState<string | null>(null);

    // Local Storage Pokemon
    const [favPokemon , setFavPokemon] = useLocalStorage<string>('fav_pokemon' , '');

    const { data } = useFetch<PokemonData>(choosedPokemon? `https://pokeapi.co/api/v2/pokemon/${choosedPokemon}` : "");

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        if(pokemon.trim()){
            setChoosedPokemon(pokemon.toLowerCase());
            setFavPokemon(pokemon);
        }
    }

  return (
    <section>
        <h2 className='page-title'>Pokedex Interativa</h2>
        <h3>Digite o nome do seu Pokemon favorito abaixo:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="pokemon" id="pokemon" 
                placeholder='Digite o Pokemon...'
                onChange={e => setPokemon(e.target.value)}
                style={{fontSize: 30}}
            />
            <button type="submit">Buscar</button>
        </form>
        {data &&
            <>
                <h2>Aqui está um {data.name.charAt(0).toUpperCase() + data.name.substring(1)}!</h2>
                <img src={data.sprites.front_default} height={200}/>
            </>
        }
        {!favPokemon && null}
        {favPokemon &&
            <>
                <hr />
                <h2>Seu atual Pokemon favorito é o: {favPokemon.charAt(0).toUpperCase() + favPokemon.substring(1)}</h2>
            </>
        }
    </section>
  )
}

export default Pokedex