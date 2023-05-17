import React from "react";
import Battleship from "../scripts/Battleship";
import {
  ShipWrapper,
  ShipsContainer,
} from "./styled_components/DisplayShipsStyles";

type DisplayShipsProps = {
  player: string;
  ships: Battleship[];
};

const imageUrls = [
  "./assets/Carrier Shape.png",
  "./assets/Cruiser Shape.png",
  "./assets/Submarine Shape.png",
  "./assets/Battleship Shape.png",
  "./assets/Aircraft Shape.png",
];

const DisplayShips = ({ player, ships }: DisplayShipsProps) => {
  console.log(player, ships);
  return (
    <ShipsContainer player={player}>
      {ships
        .sort((a, b) => a.getLength - b.getLength)
        .map((ship, i) => {
          return (
            <ShipWrapper
              key={i}
              sunk={ship.isSunk()}
              length={ship.getLength}
              index={i}
            >
              <img src={`${imageUrls[i]}`} />
            </ShipWrapper>
          );
        })}
    </ShipsContainer>
  );
};

export default DisplayShips;
