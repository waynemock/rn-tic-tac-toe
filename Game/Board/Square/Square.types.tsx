import { BoardGridItem } from '../Board.types';

export type SquareProps = {
  isWinner: boolean;
  onPress: () => void
  value: BoardGridItem;
}
