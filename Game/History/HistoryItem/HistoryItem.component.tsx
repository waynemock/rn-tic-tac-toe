import { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { HistoryItemProps } from './HistoryItem.types';
import { historyItemStyles } from './HistoryItem.styles';

export const HistoryItem: FunctionComponent<HistoryItemProps> = (props) => {
  const {
    currentTurn,
    gridSize,
    index,
    item,
    setCurrentTurn,
  } = props;

  const className = currentTurn === index ? 'historyButton highlight' : 'historyButton';
  const player = index % 2 ? 'X' : 'O';
  let turn = 'unknown';
  if (item.playedSquare) {
    const [row, column] = item.playedSquare;
    turn = `: ${player} played (${(row) + 1}, ${(column % gridSize) + 1})`;
  }

  let label = 'Restart game';
  if (index) {
    label = index === currentTurn ? `Current turn #${index}: ${turn}` : `Go to turn #${index}: ${turn}`;
  }

  return (
    <View key={index} style={historyItemStyles.item}>
      <Button
        color={currentTurn === index ? '#646cff' : 'black'}
        onPress={() => setCurrentTurn(index)}
        title={label}
      />
    </View>
  );
}
