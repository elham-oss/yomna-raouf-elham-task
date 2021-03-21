import { Avatar } from "../Avatar/Avatar";
import "./Tile.css";

const Tile = ({ theme, questionNumber, id, target }) => {
  return (
    /* Stting the color of the Tile based on the theme prop value */
    <div className={`Tile ${theme === "Dark" ? "Tile__Dark" : "Tile__Light"}`}>
      {target ? (
        <>
          <div className="Tile__label">{questionNumber}</div>
         {/*  <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <Avatar />
            <p>محمد أحمد </p>
          </div> */}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export { Tile };
