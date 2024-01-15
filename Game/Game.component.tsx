import { cloneDeep } from 'lodash';
import {
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { View } from 'react-native';

import {
  Board,
  BoardGrid,
  BoardGridItemIndex,
} from './Board';
import { GameHistory } from './Game.types';
import { gameConstants } from './Game.constants';
import { gameUtils } from './utils';
import { gameStyles } from './Game.styles';
import { GridSizeSelect } from './GridSizeSelect';
import { History } from './History';

export const Game: FunctionComponent = () => {
  const [gridSize, setGridSize] = useState(gameConstants.defaultGridSize);
  const [history, setHistory] = useState<GameHistory>([{ board: gameUtils.initBoard(gridSize)}]);
  const [currentTurn, setCurrentTurn] = useState(0);

  useEffect(() => {
    if (gridSize !== history[0].board.length) {
      setCurrentTurn(0);
      setHistory([{ board: gameUtils.initBoard(gridSize)}])
    }
  }, [gridSize, history]);

  const takeTurn = (newBoard: BoardGrid, square: BoardGridItemIndex) => {
    const newHistory = cloneDeep(history.slice(0, currentTurn + 1));
    setHistory([...newHistory, {
      board: cloneDeep(newBoard),
      playedSquare: square,
    }]);
    setCurrentTurn(currentTurn + 1);
  }

  return (
    <View style={gameStyles.container}>
      <Board
        board={cloneDeep(history[currentTurn].board)}
        currentTurn={currentTurn}
        takeTurn={takeTurn}
      />
      <GridSizeSelect
        defaultValue={gameConstants.defaultGridSize}
        setGridSize={setGridSize}
      />
      <History
        currentTurn={currentTurn}
        gridSize={gridSize}
        history={history}
        setCurrentTurn={setCurrentTurn}
      />
    </View>
  )
}