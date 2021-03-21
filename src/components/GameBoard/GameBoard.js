import { useState, useEffect } from "react";
import { Tile } from "../Tile/Tile";
import "./GameBoard.css";

const GameBoard = ({ questionsCount }) => {
  const tiles = questionsCount * 5;

  const Target = [4, 6, 14];
  return (
    <div className="GameBoard">
      <div className="GameBoard__container">
        {Array.from(Array(tiles)).map((_, i) => {
          return i % 2 === 0 ? (
            <>
              {/* TARGET will returns TRUE / FALSE */}
              <Tile
                id={i}
                key={i}
                target={Target.includes(i)}
                theme={"Dark"}
                questionNumber={Target.indexOf(i) + 1}
              />
            </>
          ) : (
            <>
              {/* TARGET will returns TRUE / FALSE */}
              <Tile
                id={i}
                key={i}
                target={Target.includes(i)}
                theme={"Light"}
                questionNumber={Target.indexOf(i) + 1}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export { GameBoard };
