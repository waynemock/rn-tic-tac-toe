import { GameHistoryItem } from '../../Game.types';
import { HistoryProps } from '../History.types';

export type HistoryItemProps = Omit<HistoryProps, 'history'> & {
  index: number;
  item: GameHistoryItem;
}
