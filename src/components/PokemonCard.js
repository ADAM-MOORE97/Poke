import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  // console.log(sprites.front)
  const [toggle, setToggle] = useState(true)
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={()=>setToggle(!toggle)} alt="oh no!" src={toggle? sprites.front:sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
