import { useState } from "react";
import { Tile } from "../Tile/Tile";
import "./GameBoard.css";

const GameBoard = ({ questionsCount }) => {
  const [tiles, setTiless] = useState(questionsCount * 5);


  return (
    <div className="GameBoard">
      <div className="GameBoard__container">
        {Array.from(Array(tiles)).map((_, i) => {
          return i % 2 === 0 ? (
            <Tile id={i} key={i} ref={[4,6,14].includes(i)?  } theme={"Dark"} />
          ) : (
            <Tile id={i} key={i} theme={"Light"} />
          );
        })}
      </div>
    </div>
  );
};

export { GameBoard };
