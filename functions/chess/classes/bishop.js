import { Piece } from "./piece";

const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class Bishop extends Piece {
  constructor(color, position = null) {
    super(color, position);
    this.symbol = "b";
  }

  getPossibleMoves() {
    if (!this.position) return [];

    const moves = [];
    const { file, rank } = Piece.parsePosition(this.position);
    const fileIndex = FILES.indexOf(file);

    const directions = [
      { df: 1, dr: 1 },
      { df: 1, dr: -1 },
      { df: -1, dr: 1 },
      { df: -1, dr: -1 },
    ];

    directions.forEach(({ df, dr }) => {
      let currentFile = fileIndex + df;
      let currentRank = rank + dr;

      while (currentFile >= 0 && currentFile < FILES.length && currentRank >= 1 && currentRank <= 8) {
        const targetPosition = `${FILES[currentFile]}${currentRank}`;
        const occupant = Piece.getPieceAt(targetPosition);
        if (occupant) {
          if (occupant.color !== this.color) {
            moves.push(targetPosition);
          }
          break;
        }
        moves.push(targetPosition);
        currentFile += df;
        currentRank += dr;
      }
    });

    return moves;
  }
}
