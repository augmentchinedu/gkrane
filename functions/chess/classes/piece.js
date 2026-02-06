import { boardMap, isValidPosition } from "../board";

const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class Piece {
  constructor(color, position = null) {
    this.color = color; // "white" | "black"
    this.position = position ? position.toUpperCase() : null;
    this.hasMoved = false;

    if (this.position) {
      this.updateBoard(this.position);
    }
  }

  static parsePosition(position) {
    const match = /^([A-Ha-h])([1-8])$/.exec(position);
    if (!match) {
      throw new Error(`Invalid position: ${position}`);
    }
    return { file: match[1].toUpperCase(), rank: Number(match[2]) };
  }

  static getPieceAt(position) {
    if (!position) return null;
    const { file, rank } = Piece.parsePosition(position);
    return boardMap[file][rank - 1];
  }

  static toPosition(fileIndex, rank) {
    return `${FILES[fileIndex]}${rank}`;
  }

  updateBoard(newPosition) {
    const normalized = newPosition.toUpperCase();
    if (!isValidPosition(normalized)) {
      throw new Error(`Invalid position: ${newPosition}`);
    }

    if (this.position) {
      const { file, rank } = Piece.parsePosition(this.position);
      if (boardMap[file][rank - 1] === this) {
        boardMap[file][rank - 1] = null;
      }
    }

    const { file, rank } = Piece.parsePosition(normalized);
    boardMap[file][rank - 1] = this;
    this.position = normalized;
  }

  move(target) {
    const normalized = target.toUpperCase();
    const possibleMoves = this.getPossibleMoves();

    if (!possibleMoves.includes(normalized)) {
      return false;
    }

    this.updateBoard(normalized);
    this.hasMoved = true;
    return true;
  }

  getPossibleMoves() {
    return [];
  }

  get img() {
    return `https://storage.googleapis.com/great-unknown.appspot.com/images/games/chess/${this.color[0]}${this.symbol}.png`;
  }
}
