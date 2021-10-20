import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [poke, setPoke]=useState([])
  const [pokeFilterList, setPokeFilterList]=useState(poke)
  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
    .then(r=>r.json())
    .then(data=>setPoke(data))
  }, [])

function addPoke(newPokemon){
  fetch(`http://localhost:3001/pokemon`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  })
  setPoke([newPokemon,...poke])
}

  function searchPoke(e){
const filteredPoke = poke.filter(pokes=>{return pokes.name.includes(e.target.value)
})
setPokeFilterList(filteredPoke)
}

useEffect(()=>{
setPokeFilterList(poke)
},[poke])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke} />
      <br />
      <Search search={searchPoke}/>
      <br />
      <PokemonCollection poke={pokeFilterList} />
    </Container>
  );
}

export default PokemonPage;
