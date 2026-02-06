import { Piece } from "./piece";

const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class Pawn extends Piece {
  constructor(color, position = null) {
    super(color, position);
    this.symbol = "p";
  }

  getPossibleMoves() {
    if (!this.position) return [];

    const moves = [];
    const { file, rank } = Piece.parsePosition(this.position);
    const fileIndex = FILES.indexOf(file);
    const direction = this.color === "white" ? 1 : -1;
    const forwardRank = rank + direction;
    const startingRank = this.color === "white" ? 2 : 7;

    if (forwardRank >= 1 && forwardRank <= 8) {
      const forwardPosition = `${file}${forwardRank}`;
      if (!Piece.getPieceAt(forwardPosition)) {
        moves.push(forwardPosition);

        const doubleRank = rank + direction * 2;
        if (!this.hasMoved && rank === startingRank) {
          const doublePosition = `${file}${doubleRank}`;
          if (!Piece.getPieceAt(doublePosition)) {
            moves.push(doublePosition);
          }
        }
      }
    }

    [fileIndex - 1, fileIndex + 1].forEach((targetIndex) => {
      if (targetIndex < 0 || targetIndex >= FILES.length) return;
      const targetFile = FILES[targetIndex];
      const targetRank = rank + direction;
      if (targetRank < 1 || targetRank > 8) return;
      const targetPosition = `${targetFile}${targetRank}`;
      const occupant = Piece.getPieceAt(targetPosition);
      if (occupant && occupant.color !== this.color) {
        moves.push(targetPosition);
      }
    });

    return moves;
  }
}
