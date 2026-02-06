import { Piece } from "./piece";

const FILES = ["A", "B", "C", "D", "E", "F", "G", "H"];

export class King extends Piece {
  constructor(color, position = null) {
    super(color, position);
    this.symbol = "k";
  }

  getPossibleMoves() {
    if (!this.position) return [];

    const moves = [];
    const { file, rank } = Piece.parsePosition(this.position);
    const fileIndex = FILES.indexOf(file);

    for (let df = -1; df <= 1; df += 1) {
      for (let dr = -1; dr <= 1; dr += 1) {
        if (df === 0 && dr === 0) continue;
        const targetFile = fileIndex + df;
        const targetRank = rank + dr;
        if (targetFile < 0 || targetFile >= FILES.length) continue;
        if (targetRank < 1 || targetRank > 8) continue;
        const targetPosition = `${FILES[targetFile]}${targetRank}`;
        const occupant = Piece.getPieceAt(targetPosition);
        if (!occupant || occupant.color !== this.color) {
          moves.push(targetPosition);
        }
      }
    }

    return moves;
  }
}
