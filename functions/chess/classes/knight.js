import { Piece } from "./piece";

const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class Knight extends Piece {
  constructor(color, position = null) {
    super(color, position);
    this.symbol = "n";
  }

  getPossibleMoves() {
    if (!this.position) return [];

    const moves = [];
    const { file, rank } = Piece.parsePosition(this.position);
    const fileIndex = FILES.indexOf(file);

    const offsets = [
      { df: 1, dr: 2 },
      { df: 2, dr: 1 },
      { df: 2, dr: -1 },
      { df: 1, dr: -2 },
      { df: -1, dr: -2 },
      { df: -2, dr: -1 },
      { df: -2, dr: 1 },
      { df: -1, dr: 2 },
    ];

    offsets.forEach(({ df, dr }) => {
      const targetFile = fileIndex + df;
      const targetRank = rank + dr;
      if (targetFile < 0 || targetFile >= FILES.length) return;
      if (targetRank < 1 || targetRank > 8) return;
      const targetPosition = `${FILES[targetFile]}${targetRank}`;
      const occupant = Piece.getPieceAt(targetPosition);
      if (!occupant || occupant.color !== this.color) {
        moves.push(targetPosition);
      }
    });

    return moves;
  }
}
