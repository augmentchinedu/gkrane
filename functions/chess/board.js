const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const boardMap = files.reduce((acc, file) => {
  acc[file] = Array(8).fill(null);
  return acc;
}, {});

export function isValidPosition(position) {
  if (typeof position !== "string") return false;
  const match = /^([A-Ha-h])([1-8])$/.exec(position);
  return Boolean(match);
}

/*
Integration example:

import { boardMap } from "./board";
import { Bishop, Knight, Pawn, Queen } from "./classes";

const pawn = new Pawn("white", "E2");
const bishop = new Bishop("white", "C1");
const knight = new Knight("white", "G1");
const queen = new Queen("black", "D8");

boardMap.E[1] = pawn;
boardMap.C[0] = bishop;
boardMap.G[0] = knight;
boardMap.D[7] = queen;

const pawnMoves = pawn.getPossibleMoves();
const bishopMoves = bishop.getPossibleMoves();
const knightMoves = knight.getPossibleMoves();
const queenMoves = queen.getPossibleMoves();

pawn.move("E4");
*/
