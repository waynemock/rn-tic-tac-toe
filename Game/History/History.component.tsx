import React, { FunctionComponent } from 'react';
import { HistoryProps } from './History.types';
import { FlatList } from 'react-native';
import { HistoryItem } from './HistoryItem';

export const History: FunctionComponent<HistoryProps> = (props) => {
  const {
    currentTurn,
    history,
    gridSize,
    setCurrentTurn,
  } = props;

  return (
    <FlatList
      data={history}
      renderItem={({ item, index }) => (
        <HistoryItem
          {...props}
          index={index}
          item={item}
      />)}
    />
  );
}