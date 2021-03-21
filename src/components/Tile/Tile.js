import "./Tile.css";

const Tile = ({ theme, questionNumber , ref}) => {
  return (
    /* Stting the color of the Tile based on the theme prop value */
    <div  className={`Tile ${theme === "Dark" ? "Tile__Dark" : "Tile__Light"}`}>
      <div ref={ } className="Tile__label" >{questionNumber ? questionNumber : ""}</div>
    </div>
  );
};

export { Tile };
