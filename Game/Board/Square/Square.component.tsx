import { FunctionComponent } from 'react'
import { SquareProps } from './Square.types'
import { Button, View } from 'react-native';
import { squareStyles } from './Square.styles';

export const Square: FunctionComponent<SquareProps> = (props) => {
  const {
    isWinner,
    onPress,
    value = ' ',
  } = props;

  return (
    <View style={squareStyles.container}>
      <Button
        color={isWinner ? '#646cff' : 'black'}
        onPress={() => onPress()}
        title={value}
      />
    </View>
  );
}