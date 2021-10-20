import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({poke}) {
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
       <Card.Group itemsPerRow={6}>
          {poke.map((poke)=>
          <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites}/>
          )}
       </Card.Group>
    </div>
 
  );
}

export default PokemonCollection;
