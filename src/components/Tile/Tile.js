import { Avatar } from "../Avatar/Avatar";
import "./Tile.css";

const Tile = ({ theme, questionNumber, id, target }) => {
  return (
    /* Setting the color of the Tile based on the theme prop value */
    <div className={`Tile ${theme === "Dark" ? "Tile__Dark" : "Tile__Light"}`}>
      {/* Adding lables to specified tiles */}
      <div className="Tile__label">{target ? questionNumber : ""}</div>

      {/* Control Avatar Location based on Answers stste */}
      {/*  <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}>
            <Avatar />
            <p>محمد أحمد </p>
          </div> */}
    </div>
  );
};

export { Tile };
