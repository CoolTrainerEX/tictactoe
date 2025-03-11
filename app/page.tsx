"use client";
import {
  Dispatch,
  MouseEventHandler,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Tile from "./_components/tile";
import { User } from "./_lib/user";
import { Vector2D } from "./_lib/vector2d";

function playerTurn(
  tiles: [User[][], Dispatch<SetStateAction<User[][]>>],
  coords: Vector2D,
  turn: RefObject<boolean>,
): MouseEventHandler {
  return () => {
    const newTiles = tiles[0].map((value) => [...value]);
    if (newTiles[coords.y][coords.x] == User.NONE) {
      if (!turn.current) newTiles[coords.y][coords.x] = User.PLAYER1;
      else newTiles[coords.y][coords.x] = User.PLAYER2;
    }

    tiles[1](newTiles);
    turn.current = !turn.current;
  };
}

export default function Home() {
  const tiles = useState<User[][]>(Array(3).fill(Array(3).fill(User.NONE))),
    turn = useRef(false);

  return (
    <table className="m-auto">
      <tbody>
        {tiles[0].map((tileRow, y) => (
          <tr key={y}>
            {tileRow.map((tile, x) => (
              <Tile
                key={x + y * tileRow.length}
                onClick={playerTurn(tiles, { x, y }, turn)}
                user={tile}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
