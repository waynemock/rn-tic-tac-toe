import {
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import { Square } from './Square'
import {
  BoardGridItemIndex,
  BoardProps,
  BoardResults,
} from './Board.types';
import { boardUtils } from './utils';
import { Text, View } from 'react-native';
import { boardStyles } from './Board.styles';

export const Board: FunctionComponent<BoardProps> = (props) => {
  const {
    board,
    currentTurn,
    takeTurn,
  } = props;
  const [status, setStatus] = useState("X's turn");
  const [results, setResults] = useState<BoardResults>();

  const currentPiece = currentTurn % 2 ? 'O' : 'X';

  const onClick = (index: BoardGridItemIndex) => {
    const [row, column] = index;
    if (board[row][column] || results) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][column] = currentPiece;
    takeTurn(newBoard, index);
  }

  useEffect(() => {
    const results = boardUtils.computeWinner(board);
    let status = currentPiece === 'X' ? "X's turn" : "O's turn";
    if (results) {
      status = `${results.winner} wins!`;
    } else if (currentTurn === board.length * board.length) {
      status = "Game ended in a tie!";
    }
    setStatus(status);
    setResults(results);
  }, [board, currentPiece, currentTurn]);

  const isSquareWinner = (index: number): boolean => !!results?.line.includes(index);

  return (
    <View>
      <Text style={boardStyles.status}>{status}</Text>
      {board?.map((row, rowIndex) => (
        <View key={`r${rowIndex}`} style={boardStyles.row}>
          {row.map((column, columnIndex) => {
            const index = (rowIndex * board.length) + columnIndex;
            return <Square
              key={`sq${index}`}
              isWinner={isSquareWinner(index)}
              value={column}
              onPress={() => onClick([rowIndex, columnIndex])} />;
          })}
        </View>
      ))}
    </View>
  )
}
